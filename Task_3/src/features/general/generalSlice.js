import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: 0,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setStatus: (state, payload) => {
      state.status = payload.payload;
    },
  },
});

export const { setStatus } = generalSlice.actions;

export default generalSlice.reducer;
