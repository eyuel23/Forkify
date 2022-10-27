import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
  best: false,
  take: false,
  need: false,
  searchInput: "",
  results: [],
  fullInfoId: "",
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
    changeBest(state) {
      state.best = true;
    },
    changeFullInfoId(state, action) {
      state.fullInfoId = action.payload;
    },
    changeTake(state) {
      state.take = true;
    },
    changeFullInfo(state, action) {
      state.fullInfo = action.payload;
    },
    changeNeed(state) {
      state.need = true;
    },
  },
});

const store = configureStore({ reducer: { search: searchSlice.reducer } });
export const searchactions = searchSlice.actions;
export default store;
