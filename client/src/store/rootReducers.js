import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.js"
import authApi from "./api/auth.api";


const rootReducers = combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    auth:authReducer
})

export default rootReducers;