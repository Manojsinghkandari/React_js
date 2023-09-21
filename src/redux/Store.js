import { configureStore } from "@reduxjs/toolkit";
import CountReducer from "./features/counterSlice";
import HomeReducer from "./features/homeSlice";

const Store = configureStore({
  reducer: {
    counter: CountReducer,
    home: HomeReducer,
  },
});

export default Store;
