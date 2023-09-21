import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increse: (state, action) => {
      console.log(action);
      state.count = state.count + 1;
    },

    decrese: (state, action) => {
      console.log(action);
      state.count = state.count - 1;
    },

    increaseWithPaylod: (state, action) => {
      console.log(action);
      state.count = state.count + action.payload;
    },
  },
});

export const { increse, decrese, increaseWithPaylod } = counterSlice.actions;
export default counterSlice.reducer;
