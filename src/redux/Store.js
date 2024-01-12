import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo.js/todoSlice";

export const store=configureStore( {
    reducer: todoReducer
})