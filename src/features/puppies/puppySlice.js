import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/*
TODO: Define the following 4 endpoints:
  1. getPuppies (query)
  2. getPuppy (query)
  3. addPuppy (mutation)
  4. deletePuppy (mutation)

The query endpoints should provide the "Puppy" tag.
The mutation endpoints should invalidate the "Puppy" tag.

(Optional) TODO: Write `transformResponse` and `transformErrorResponse`
functions for each endpoint.
*/

const puppyApi = createApi({
  reducerPath: "puppyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/",
  }),
  tagTypes: ["Puppy"],
  endpoints: (builder) => ({
    getPuppies: builder.query({
      query: () => "players",
      providesTags: ["Puppy"],
    }),
  }),
});

export const { useGetPuppiesQuery } = puppyApi;

export default puppyApi;
