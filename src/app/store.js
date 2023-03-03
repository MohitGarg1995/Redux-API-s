import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import fetchReducer from "../features/fetchData/fetchSlice";
import fetchHousesReducer from "../features/fetchData/FetchAPIDataSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fetch: fetchReducer,
    fetchHouses: fetchHousesReducer,
  },
});
