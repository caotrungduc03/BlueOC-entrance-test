import { createSlice } from "@reduxjs/toolkit";
import { addPost, fetchPosts } from "./postsAction";

const initialState = {
  posts: [],
  getLoading: "idle",
  postLoading: "idle",
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostLoading: (state, action) => {
      state.postLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.getLoading = "pending";
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.getLoading = "succeeded";
        state.posts = action.payload;
        state.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.getLoading = "failed";
        state.error = action.payload?.error || "Something went wrong";
      });

    builder
      .addCase(addPost.pending, (state) => {
        state.postLoading = "pending";
        state.error = null;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.postLoading = "succeeded";
        state.posts.push(action.payload);
        state.error = null;
      })
      .addCase(addPost.rejected, (state, action) => {
        state.postLoading = "failed";
        state.error = action.payload?.error || "Failed to add post";
      });
  },
});

export const { setPostLoading } = postsSlice.actions;

export default postsSlice.reducer;
