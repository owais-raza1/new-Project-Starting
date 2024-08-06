import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import themeReducer from "./slice/themeSlice"
import cartReducer from "./slice/themeSlice"

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, cartReducer)


const store = configureStore({
    reducer: persistedReducer,
})

const persistor = persistStore(store)

export { store, persistor}