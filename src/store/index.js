import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import toDoReducer from "./slices/todoSlider";

export const store = configureStore({
  reducer: {
    user: userReducer,
    toDo: toDoReducer,

  },
});

// console.log(store);