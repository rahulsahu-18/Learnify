import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./rootReducers";
import authApi from "./api/auth.api";
import coursesApi from "./api/courses.api";
import purchaseApi from "./api/purchaseApi";

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,coursesApi.middleware,purchaseApi.middleware),
});

const initializeApp = async () => {
    await store.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch:true}))
}
initializeApp();

export default store;