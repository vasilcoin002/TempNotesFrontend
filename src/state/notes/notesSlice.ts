import { notesService } from "@/services/notesService"
import { TypeNote, TypeNotesStateError, TypeNotesStateLoading } from "@/types"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios, { AxiosResponse } from "axios"

export type TypeNotesState = {
  notes: TypeNote[],
  loading: TypeNotesStateLoading,
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
  loading: "isLoading",
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
})

// export const {addNote} = notesSlice.actions
export default notesSlice.reducer 