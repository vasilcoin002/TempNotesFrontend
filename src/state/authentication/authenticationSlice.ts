import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {TypeAuthenticationRequest, TypeStateError, TypeStateStatus} from "@/types.ts";
import {authenticationService} from "@/services/authenticationService.ts";

export type TypeAuthenticationState = {
  isUserAuthenticated: boolean,
  status: TypeStateStatus,
  error: TypeStateError,
}

const initialState: TypeAuthenticationState = {
  isUserAuthenticated: false,
  status: "isLoading",
  error: null
}

export const authenticationSlice = createSlice(
  {
    name: "authentication",
    initialState,
    reducers: {},
    extraReducers: (builder) => builder
      .addCase(loginUser.pending, (state) => {
        state.status = "isLoading"
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isUserAuthenticated = true
        state.status = "succeeded"
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isUserAuthenticated = false
        state.status = "error"
        state.error = action.payload ? action.payload.error : "unknown error"
      })
      .addCase(registerUser.pending, (state) => {
        state.status = "isLoading"
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isUserAuthenticated = true
        state.status = "succeeded"
        state.error = null
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isUserAuthenticated = false
        state.status = "error"
        state.error = action.payload ? action.payload.error : "unknown error"
      })
  }
)

type TypeThunkApiConfig = {
  rejectValue: TypeAuthenticationState,
  fulfillValue: TypeAuthenticationState,
}

export const loginUser = createAsyncThunk<TypeAuthenticationState, TypeAuthenticationRequest, TypeThunkApiConfig>(
  "authentication/loginUser",
  async (authenticationRequest, thunkAPI) => {
    try {
      const response = await authenticationService.loginUser(authenticationRequest)
      const accessToken = response.accessToken
      authenticationService.setAccessToken(accessToken)
      return thunkAPI.fulfillWithValue({isUserAuthenticated: true, status: "succeeded", error: null})
    }
    catch (e) {
      return thunkAPI.rejectWithValue({isUserAuthenticated: false, status: "error", error: "login error"})
    }
  }
)

export const registerUser = createAsyncThunk<TypeAuthenticationState, TypeAuthenticationRequest, TypeThunkApiConfig>(
  "authentication/registerUser",
  async (authenticationRequest, thunkAPI) => {
    try {
      const response = await authenticationService.registerUser(authenticationRequest)
      const accessToken = response.accessToken
      authenticationService.setAccessToken(accessToken)
      return thunkAPI.fulfillWithValue({isUserAuthenticated: true, status: "succeeded", error: null})
    }
    catch (e) {
      return thunkAPI.rejectWithValue({isUserAuthenticated: false, status: "error", error: "register error"})
    }
  }
)

export default authenticationSlice.reducer