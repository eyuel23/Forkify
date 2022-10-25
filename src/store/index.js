import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
  searchInput: "",
  results: [
    { image_url: "../img/logo.png", title: "ima here", publisher: "i am here" },
  ],
};
const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,

  reducers: {
    newSearchInput(state, action) {
      state.searchInput = action.payload;
    },
    changeResults(state, action) {
      state.results = action.payload;
    },
  },
});

const store = configureStore({ reducer: { search: searchSlice.reducer } });
export const searchactions = searchSlice.actions;
export default store;
