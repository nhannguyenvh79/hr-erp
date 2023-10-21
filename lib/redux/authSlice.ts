import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'


interface AuthSlice {
  isLogin: boolean,
  path: string,
  userInfo: {
    role: number,
    name: string,
    email: string,
    image: string,
  }
}

const initialState: AuthSlice = {
    isLogin: false,
    path: "/",
    userInfo: {
      role: -1,
      name: "",
      email: "",
      image: "",
    }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, actions) => {
      state.isLogin = true
      state.userInfo = actions.payload
    },
    logout: (state, actions) => {
        state.isLogin = false
        state.userInfo = initialState.userInfo
    },
    getCurrentPath: (state, actions) => {
        state.path = actions.payload
      },

  },
})

export const { login, logout, getCurrentPath } = authSlice.actions

export default authSlice.reducer