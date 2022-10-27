import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
  best: false,
  take: false,
  searchInput: "",
  results: [],
  fullInfo: [],
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
    changeFullInfo(state, action) {
      state.fullInfo = action.payload;
    },
    changeTake(state) {
      state.take = true;
    },
  },
});

const store = configureStore({ reducer: { search: searchSlice.reducer } });
export const searchactions = searchSlice.actions;
export default store;
