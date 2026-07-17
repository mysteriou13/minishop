import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type {
  ConnexionResponse,
  fromDataArray,
  InscriptionResponse,
} from "../../type";

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export const apiUser = createApi({
  reducerPath: "apiUser",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    createUser: builder.mutation<InscriptionResponse, fromDataArray>({
      query: (data) => ({
        url: "/users/inscription",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    connectionUser: builder.mutation<ConnexionResponse, fromDataArray>({
      query: (data) => ({
        url: "/users/connection",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    profileUser: builder.query<ConnexionResponse, void>({
      query: () => ({
        url: "/users/profil",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

  }),
});
export const { useCreateUserMutation, useConnectionUserMutation, useProfileUserQuery } = apiUser;
