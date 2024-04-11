import { notesService } from "@/services/notesService"
import { TypeNote, TypeNotesStateError, TypeNotesStateStatus } from "@/types"
import { getFormattedExpirationStringOrUndefined } from "@/utils/DataTransformation"
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
      state.notes = []
      state.status = "error"
      state.error = action.payload ? action.payload.error : "unknown error"
    })
    .addCase(addUserNote.pending, (state) => {
      state.status = "isLoading"
    })
    .addCase(addUserNote.fulfilled, (state, action) => {
      state.notes = [...state.notes, ...action.payload.notes]
      state.status = "succeeded"
      state.error = null
    })
    .addCase(addUserNote.rejected, (state, action) => {
      state.notes = []
      state.status = "error"
      state.error = action.payload ? action.payload.error : "unknown error"
    })
    .addCase(updateUserNote.pending, (state) => {
      state.status = "isLoading"
    })
    .addCase(updateUserNote.fulfilled, (state, action) => {
      const updatedNote = action.payload.data
      const updatedNoteIndex = state.notes.findIndex((note) => note.id === updatedNote.id)
      state.notes[updatedNoteIndex] = updatedNote
      state.status = "succeeded"
      state.error = null
    })
    .addCase(updateUserNote.rejected, (state, action) => {
      state.notes = []
      state.status = "error"
      state.error = action.payload ? action.payload.error : "unknown error"
    })
})

type TypeThunkApiConfig = {
  rejectValue: TypeNotesState,
  fulfillValue: TypeNotesState,
}

export const fetchUserNotes = createAsyncThunk<TypeNotesState, void, TypeThunkApiConfig>(
  "notes/fetchUserNotes",
  async (_, thunkAPI) => {
    try {
      const data = await notesService.getUserNotes()
      return thunkAPI.fulfillWithValue({notes: data, status: "succeeded", error: null})
    }
    catch {
      return thunkAPI.rejectWithValue({notes: [], status: "error", error: "loading notes error"})
    }
  },
)

export const updateUserNotesOrder = createAsyncThunk<TypeNotesState, TypeNote[], TypeThunkApiConfig>(
  "notes/updateUserNotesOrder",
  async (newNotes, thunkAPI) => {
    try {
      await notesService.updateUserNotesOrder(newNotes.map((note) => note.id))
      return thunkAPI.fulfillWithValue({notes: newNotes, status: "succeeded", error: null})
    }
    catch {
      return thunkAPI.rejectWithValue({notes: [], status:"error", error: "updating user's notes order error"})
    }
  },
)

export const addUserNote = createAsyncThunk<TypeNotesState, TypeNote, TypeThunkApiConfig>(
  "notes/addUserNote",
  async (note, thunkAPI) => {
    try {
      const newNote = [await notesService.addUserNote(
        note.title, 
        note.description, 
        getFormattedExpirationStringOrUndefined(note.expirationDate),
      )]
      return thunkAPI.fulfillWithValue({notes: newNote, status: "succeeded", error: null})
    }
    catch {
      return thunkAPI.rejectWithValue({notes: [], status: "error", error: "adding user's note error"})
    }
  }
)

export const updateUserNote = createAsyncThunk<TypeNotesState & {data: TypeNote}, TypeNote, TypeThunkApiConfig>(
  "notes/updateUserNote",
  async (note, thunkAPI) => {
    try {
      console.log(
        note.id,
        note.title,
        note.description, 
        getFormattedExpirationStringOrUndefined(note.expirationDate),
      )
      const newNote = await notesService.updateUserNote(
        note.id,
        note.title,
        note.description, 
        getFormattedExpirationStringOrUndefined(note.expirationDate),
      )
      return thunkAPI.fulfillWithValue({notes: [], status: "succeeded", error: null, data: newNote as TypeNote})
    }
    catch {
      return thunkAPI.rejectWithValue({notes: [], status: "error", error: "adding user's note error"})
    }
  }
)

export default notesSlice.reducer 