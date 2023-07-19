import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")): null,
    
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
