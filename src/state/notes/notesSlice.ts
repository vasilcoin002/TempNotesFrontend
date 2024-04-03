import { notesService } from "@/services/notesService"
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
      state.error = action.payload ? action.payload.error : "unknown error"
    })
    .addCase(updateUserNotesOrder.pending, (state, action) => {
      state.notes = action.meta.arg
      state.status = "isLoading"
      state.error = null
    })
    .addCase(updateUserNotesOrder.fulfilled, (state) => {
      state.status = "succeeded"
    })
    .addCase(updateUserNotesOrder.rejected, (state, action) => {
      state.notes = action.payload? action.payload.notes : []
      state.status = "succeeded"
      state.error = action.payload ? action.payload.error : "unknown error"
    })


})

type TypeThunkApiConfig = {
  rejectValue: TypeNotesState,
  fulfillValue: TypeNotesState,
  state: TypeNotesState,
}

export const fetchUserNotes = createAsyncThunk<TypeNotesState, void, TypeThunkApiConfig>(
  "notes/fetchUserNotesByUserId",
  async (_, thunkAPI) => {
    try {
      const responce = await fetch("http://localhost:8080/api/v1/notes/userNotes?userId=65df98471e44df48ce57c60f")
      const data = await responce.json()
      return thunkAPI.fulfillWithValue({notes: data, status: "succeeded", error: null})
    }
    catch {
      return thunkAPI.rejectWithValue({notes: [], status: "error", error: "loading notes error"})
    }
  },
)

export const updateUserNotesOrder = createAsyncThunk<TypeNotesState, TypeNote[], TypeThunkApiConfig>(
  "notes/updateUserNotesOrderByNotesIdList",
  async (newNotes, thunkAPI) => {
    const oldNotes = thunkAPI.getState().notes
    try {
      await notesService.updateUserNotesOrder(newNotes.map((note) => note.id))
      return thunkAPI.fulfillWithValue({notes: newNotes, status: "succeeded", error: null})
    }
    catch {
      return thunkAPI.rejectWithValue({notes: oldNotes, status:"error", error: "updating user's notes order error"})
    }
  },
)

export default notesSlice.reducer 