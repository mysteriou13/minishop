import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type {
  ConnexionResponse,
  fromDataArray,
  InscriptionResponse,
} from "../../type";

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export const apiUser = createApi({
  reducerPath: "apiUser",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiUrl}/` }),
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

  }),
});
export const { useCreateUserMutation, useConnectionUserMutation } = apiUser;
