import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
  best: false,
  take: false,
  searchInput: "",
  results: [
    {
      id: 1,
      image_url: "../img/logo.png",
      title: "ima here",
      publisher: "i am here",
    },
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
    changeBest(state, action) {
      state.best = true;
    },
  },
});

const store = configureStore({ reducer: { search: searchSlice.reducer } });
export const searchactions = searchSlice.actions;
export default store;
