import { TypeNote, TypeNotesStateError, TypeNotesStateStatus } from "@/types"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export type TypeNotesState = {
  notes: TypeNote[],
  status: TypeNotesStateStatus,
  error: TypeNotesStateError,
}

const initialState:TypeNotesState = {
  notes: [],
  status: "isLoading",
  error: null
}

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => builder
    .addCase(fetchUserNotes.pending, (state) => {
      state.status = "isLoading"
      state.error = null
    })
    .addCase(fetchUserNotes.fulfilled, (state, action) => {
      state.notes = action.payload.notes
      state.status = "succeeded"
      state.error = null
    })
    .addCase(fetchUserNotes.rejected, (state, action) => {
      state.notes = []
      state.status = "error"
      state.error = action.payload? action.payload.error : "unknown error"
    })
})

type TypeThunkApiConfigFetchUserNotes = {
  rejectValue: TypeNotesState,
  fulfillValue: TypeNotesState,
}

export const fetchUserNotes = createAsyncThunk<TypeNotesState, void, TypeThunkApiConfigFetchUserNotes>(
  "notes/fetchUserNotesByUserId",
  async (_, thunkAPI) => {
    try {
      const responce = await fetch("http://localhost:8080/api/v1/notes/userNotes?userId=65df98471e44df48ce57c60f")
      const data = await responce.json()
      return thunkAPI.fulfillWithValue({notes: data, status: "succeeded", error: null})
    }
    catch {
      return thunkAPI.rejectWithValue({notes: [], status: "error", error: "loading notes server error"})
    }
  },
)

export default notesSlice.reducer 