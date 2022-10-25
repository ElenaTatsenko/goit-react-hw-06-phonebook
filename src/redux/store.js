import { configureStore } from "@reduxjs/toolkit";
import { persistContactReducer } from "./contactsSlice";
import { filterSlice } from './filterSlice'
import { persistStore } from "redux-persist";
//import { devToolsEnhancer } from "@redux-devtools/extension";


export const store = configureStore({
    reducer: {
        contacts: persistContactReducer,
        filter: filterSlice.reducer,
    }
})
export const persistor = persistStore(store)