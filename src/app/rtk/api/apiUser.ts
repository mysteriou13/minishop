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
  endpoints: (builder) => ({
    createUser: builder.mutation<InscriptionResponse, fromDataArray>({
      query: (data: fromDataArray) => ({
        url: "/users/inscription",
        method: "POST",
        body: data,
      }),
    }),
    connectionUser: builder.mutation<ConnexionResponse, fromDataArray>({
      query: (data: fromDataArray) => ({
        url: "/users/connection",
        method: "POST",
        body: data,
      }),
    }),

  }),
});

export const { useCreateUserMutation, useConnectionUserMutation } = apiUser;
