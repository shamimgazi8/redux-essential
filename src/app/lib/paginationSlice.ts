import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start: 0,
  end: 5,
};
export const pagination = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    incriment: (state, action) => {
      state.start = action.payload;
    },
    decriment: (state, action) => {
      state.end = action.payload;
    },
  },
});
export const { incriment, decriment } = pagination.actions;
export default pagination;
