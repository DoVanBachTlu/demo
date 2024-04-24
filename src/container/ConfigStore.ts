import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../sliceRedux";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
