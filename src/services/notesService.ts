import { TypeNote } from "@/types"
import axios from "axios"

class NotesService {
  private urlGetUserNotes = "http://localhost:8080/api/v1/notes/userNotes?userId="
  // "65df98471e44df48ce57c60f" my userId

  async getUserNotes(userId: string) {
    // const {data} = await axios.get<TypeNote[]>(this.urlGetUserNotes + userId)
    const data = await fetch(this.urlGetUserNotes + userId)
    return data.json()
  }
}

export const notesService = new NotesService()