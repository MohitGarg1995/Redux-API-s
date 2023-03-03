import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  values: 0,
  data: "",
  error: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.values -= 1;
    },
    getData: (state) => {
      fetch("https://www.anapioficeandfire.com/api")
        .then((response) => response.json())
        .then((data) => console.log("data", data));
    },
  },
});

export const { increment, decrement, getData } = counterSlice.actions;

export default counterSlice.reducer;
