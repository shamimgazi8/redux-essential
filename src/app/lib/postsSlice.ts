import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonServerApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
  }),
  tagTypes: ["post"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `data`,
      providesTags: ["post"],
    }),
    createPost: builder.mutation({
      query: (initialPost) => ({
        url: `data`,
        method: "POST",
        body: initialPost,
      }),
      invalidatesTags: ["post"],
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = jsonServerApi;
