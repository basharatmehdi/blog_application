import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/posts/",
  }),
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (newPost) => ({
        url: "create-post",
        method: "POST",
        body: { ...newPost },
      }),
    }),
    getPublishedPosts: builder.query({
      query: () => ({
        url: "published",
        method: "GET",
      }),
    }),
    getAllPosts: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
    getSinglePost: builder.query({
      query: (id) => ({
        url: `${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreatePostMutation,
  useGetPublishedPostsQuery,
  useGetAllPostsQuery,
  useGetSinglePostQuery,
} = postApi;
