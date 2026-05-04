import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { fromDataArray } from "../../components/type";

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export const apiUser = createApi({
  reducerPath: "apiUser",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiUrl}/` }),
  endpoints: (builder: any) => ({
    createUser: builder.mutation({
      query: (data: fromDataArray) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = apiUser;
