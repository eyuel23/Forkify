import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
  searchInput: "",
  results: [],
};
const searchSlice = createSlice({
  name: "path",
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
