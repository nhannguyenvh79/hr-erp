import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface AuthSlice {
  isLogin: boolean;
  path: string;
  userInfo: any;
}

const initialState: AuthSlice = {
  isLogin: false,
  path: "/",
  userInfo: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getMe: (state, actions) => {
      state.isLogin = true;
      state.userInfo = actions.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.userInfo = initialState.userInfo;
      localStorage.removeItem("erptk");
    },
    getCurrentPath: (state, actions) => {
      state.path = actions.payload;
    },
  },
});

export const { getMe, logout, getCurrentPath } = authSlice.actions;

export default authSlice.reducer;
