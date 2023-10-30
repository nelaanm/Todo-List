import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todosReducer";

const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})

export default store