import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import type { ConnexionResponse } from "@/app/type";

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/connection",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = typeof credentials?.email === "string" ? credentials.email : "";
        const password = typeof credentials?.password === "string" ? credentials.password : "";

        if (!email || !password) {
          return null;
        }

        const response = await fetch(`${apiUrl}/users/connection`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            { name: "email", value: email, errorMessage: "" },
            { name: "password", value: password, errorMessage: "" },
          ]),
        });

        const rawPayload = await response.text();

        if (!response.ok || !rawPayload) {
          return null;
        }

        let payload: ConnexionResponse;
        try {
          // Some backend failures can return HTML/text and would crash response.json().
          payload = JSON.parse(rawPayload.replace(/^\uFEFF/, "").trim()) as ConnexionResponse;
        } catch {
          return null;
        }

        if (!payload.StatusUser || !payload.StatusPassword || !payload.token) {
          return null;
        }

        return {
          id: email,
          email,
          accessToken: payload.token,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.accessToken = user.accessToken;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email ?? null;
      }
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
