import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice"
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
    cartStore: cartReducer,
    themeStore: themeReducer
})

export default rootReducer