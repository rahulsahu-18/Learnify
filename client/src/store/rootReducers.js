import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.js"
import authApi from "./api/auth.api";
import coursesApi from "./api/courses.api.js";


const rootReducers = combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    [coursesApi.reducerPath]:coursesApi.reducer,
    auth:authReducer
})

export default rootReducers;