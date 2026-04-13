import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    isLoggedin:false,
}

const authSlice = createSlice({
   name:"authSlice",
   initialState,
   reducers:{
    userLoggedIn:(state,action) => {
        state.user = action.payload;
        state.isLoggedin = true;
    },
    userLoggedOut:(state) => {
        state.user = null,
        state.isLoggedin = false
    }
   }
});

export const {userLoggedIn,userLoggedOut} = authSlice.actions;
export default authSlice.reducer;