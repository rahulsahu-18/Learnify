import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.js"
import authApi from "./api/auth.api";
import coursesApi from "./api/courses.api.js";
import purchaseApi from "./api/purchaseApi.js";


const rootReducers = combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    [coursesApi.reducerPath]:coursesApi.reducer,
    [purchaseApi.reducerPath]:purchaseApi.reducer,
    auth:authReducer
})

export default rootReducers;