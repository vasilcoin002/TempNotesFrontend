// import { TypeNote } from "@/types"
// import axios from "axios"

class NotesService {
  private urlGetUserNotes = "http://localhost:8080/api/v1/notes/userNotes?userId="
  // "65df98471e44df48ce57c60f" my userId

  async getUserNotes(userId: string) {
    // const {data} = await axios.get<TypeNote[]>(this.urlGetUserNotes + userId)
    const data = await fetch(this.urlGetUserNotes + userId)
    return data.json()
  }

  // TODO make the addUserNote method work
  async addUserNote(title: string, description: string, expirationDate?: Date) {
    console.log([title, description, expirationDate])
  }

  // TODO make the updateUserNote method work
  async updateUserNote(id: string, title: string, description: string, expirationDate?: Date) {
    console.log([id, title, description, expirationDate])
  }


  getCheckingOfNoteArgs(
    title: string,
    description: string,
    isExpirationDateDisabled: boolean,
    expirationDate?: Date,
  ) {
    const state: {correct: boolean, error: string | null} = {correct: true, error: null}
    const now = Date.now()
    if (title === "" && description === "") {
      state.error = "Title or description must be given"
      state.correct = false
      return state
    }
    else if(isExpirationDateDisabled === false && expirationDate === undefined) {
      state.error = "Please, select the date or disable it"
      state.correct = false
      return state
    }
    else if(isExpirationDateDisabled === false && expirationDate && expirationDate.getTime() <= now) {
      state.error = "Please, select the day which is after today"
      state.correct = false
      return state
    }
    return state
  }
}

export const notesService = new NotesService()