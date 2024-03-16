import { TypeNote } from "@/types"
import { createSlice } from "@reduxjs/toolkit"
import axios, { AxiosResponse } from "axios"

export type TypeNotesState = {
  notes: TypeNote[] | null
}


async function getUserNotes() {
  const notes: TypeNote[] | null = await axios.get("http://localhost:8080/api/v1/notes/userNotes?userId=65df98471e44df48ce57c60f")
  .then((responce: AxiosResponse<TypeNote[]>) => {
    return responce.data
  }).catch(
    (e) => {
      console.log(e)
      return null
    }
  )
  return notes
}

const initialState:TypeNotesState = {
  notes: await getUserNotes()
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