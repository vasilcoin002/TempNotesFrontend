import { TypeNote } from "@/types"
import { createSlice } from "@reduxjs/toolkit"

export type TypeNotesState = {
  notes: TypeNote[]
}

// type TypeAddNote = (state: TypeNotesState, note: TypeNote) => void

const initialState:TypeNotesState = {
  notes: [
    {id: "3", title: "title3", description: "description3", expiresAt: "apchihba"},
  ]
}

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    // addNote: (state: TypeNotesState, action: PayloadAction<TypeNote>) => {
    //   state.notes.push(action.payload)
    // },
  },
})

// export const {addNote} = notesSlice.actions
export default notesSlice.reducer 