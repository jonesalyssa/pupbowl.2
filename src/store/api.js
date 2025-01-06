import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT_CODE = "2409"; // Define cohort code
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_CODE}/`;

// DONE: configure createApi to use API_URL as the base URL
// DONE: add "Puppy" as a tag type.

const api = createApi({
  reducerPath: "puppyApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Puppy"],
  endpoints: (builder) => ({
    getPuppies: builder.query({
      query: () => "puppies", // The 'puppies' endpoint will be appended to API_URL
      providesTags: ["Puppy"],
    }),
    getPuppyDetails: builder.query({
      query: (id) => `puppies/${id}`, // Appends the puppy ID to the API_URL
      providesTags: (result, error, id) => [{ type: "Puppy", id }],
    }),
    addPuppy: builder.mutation({
      query: (newPuppy) => ({
        url: "puppies", // Use the same endpoint for adding puppies
        method: "POST",
        body: newPuppy,
      }),
      invalidatesTags: ["Puppy"],
    }),
    removePuppy: builder.mutation({
      query: (id) => ({
        url: `puppies/${id}`, // Use the endpoint to delete a puppy
        method: "DELETE",
      }),
      invalidatesTags: ["Puppy"],
    }),
  }),
});

export const {
  useGetPuppiesQuery,
  useGetPuppyDetailsQuery,
  useAddPuppyMutation,
  useRemovePuppyMutation,
} = api;

export default api;
