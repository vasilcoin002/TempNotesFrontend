import { AppDispatch } from '@/state/store.ts';
import { useDispatch } from 'react-redux';
import { notesService } from "@/services/notesService"
import { TypeNote, TypeNotesStateError, TypeNotesStateStatus } from "@/types"
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios, { AxiosResponse } from "axios"
import { RootState } from "../store"
import { AsyncThunkConfig, GetThunkAPI } from 'node_modules/@reduxjs/toolkit/dist/createAsyncThunk';

export type TypeNotesState = {
  notes: TypeNote[],
  status: TypeNotesStateStatus,
  error: TypeNotesStateError,
}


// async function getUserNotes() {
//   const notes: TypeNote[] = await axios.get("http://localhost:8080/api/v1/notes/userNotes?userId=65df98471e44df48ce57c60f")
//   .then((responce: AxiosResponse<TypeNote[]>) => {
//     return responce.data
//   }).catch(
//     (e) => {
//       console.log(e)
//       return []
//     }
//   )
//   return notes
// }

const initialState:TypeNotesState = {
  notes: [],
  status: "isLoading",
  error: null
}

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    // addNote: (state: TypeNotesState, action: PayloadAction<TypeNote>) => {
    //   state.notes.push(action.payload)
    // },
  },
  extraReducers: (builder) => builder
    .addCase(getUserNotesByUserId.pending, (state) => {
      state.notes = []
      state.status = "isLoading"
      state.error = null
    })
    .addCase(getUserNotesByUserId.rejected, (state, action) => {
      state.notes = []
      state.status = "error"
      state.error = action.payload.error 
    })
    .addCase(getUserNotesByUserId.fulfilled, (state, action) => {
      state.notes = action.payload.notes
      state.status = "succeeded"
      state.error = null
    })
})

export const useAppDispatch = () => useDispatch<AppDispatch>()

export type TypeThunkApiConfigGetUserNotesById = {
  rejectValue: TypeNotesState,
  fulfillValue: TypeNotesState,
}

const getUserNotesByUserId = createAsyncThunk(
  "notes/getUserNotesByUserId",
  async (userId: string, thunkAPI: GetThunkAPI<TypeThunkApiConfigGetUserNotesById>) => {
    try {
      const responce = await notesService.getUserNotes(userId)
      thunkAPI.fulfillWithValue({notes: responce, status: "succeeded", error: null})
    }
    catch (error) {
      console.log(error)
      thunkAPI.rejectWithValue({notes: [], status: "error", error: error})
    }
  },
)

// export const {addNote} = notesSlice.actions
export default notesSlice.reducer 