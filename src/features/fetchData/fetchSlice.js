import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define the async thunk to fetch data
export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (category) => {
    const response = await axios.get(
      //   `https://www.anapioficeandfire.com/api/${category}`
      `https://www.anapioficeandfire.com/api/books`
    );
    console.log("API data", response.data);
    return response.data;
  }
);

// Define the initial state
const initialState = {
  data: [],
  loading: false,
  error: null,
};

//Define the Slice
const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Handle the pending state
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    //Handle the fullfilled state
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });

    //Handle the rejected state
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default fetchSlice.reducer;
