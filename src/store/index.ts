import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeslice"

const store = configureStore({
    reducer: themeReducer,
})

export default store