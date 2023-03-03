import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Define asyncThunk
export const fetchAPIData2 = createAsyncThunk(
  "data/fetchAPIData",
  async (category) => {
    const response = await axios.get(
      `https://www.anapioficeandfire.com/api/houses`
    );
    console.log("fetchAPIData2 API data", response.data);
    return response.data;
  }
);

const initialState = {
  dataVal: [],
  loadingVal: false,
  error: null,
};

export const fetchHousesSlice = createSlice({
  name: "fetchHouses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Handle the pending state
    builder.addCase(fetchAPIData2.pending, (state) => {
      state.loadingVal = true;
      state.error = null;
    });

    //Handle the fullfilled state
    builder.addCase(fetchAPIData2.fulfilled, (state, action) => {
      state.loadingVal = false;
      state.dataVal = action.payload;
    });

    //Handle the rejected state
    builder.addCase(fetchAPIData2.rejected, (state, action) => {
      state.loadingVal = false;
      state.error = action.error.message;
    });
  },
});

export default fetchHousesSlice.reducer;
