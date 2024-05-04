import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {TypeAuthenticationRequest, TypeStateError, TypeStateStatus} from "@/types.ts";
import {authenticationService} from "@/services/authenticationService.ts";

export type TypeAuthenticationState = {
  accessToken: string | undefined,
  status: TypeStateStatus,
  error: TypeStateError,
}

const initialState: TypeAuthenticationState = {
  accessToken: undefined,
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
      .addCase(loginUser.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken
        state.status = "succeeded"
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.accessToken = undefined
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
      return thunkAPI.fulfillWithValue({accessToken, status: "succeeded", error: null})
    }
    catch (e) {
      return thunkAPI.rejectWithValue({accessToken: undefined, status: "error", error: "login error"})
    }
  }
)

export default authenticationSlice.reducer