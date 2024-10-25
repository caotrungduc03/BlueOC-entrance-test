import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./general/generalSlice";
import postsReducer from "./posts/postsSlice";

export const store = configureStore({
  reducer: {
    general: generalReducer,
    posts: postsReducer,
  },
});

export default store;
