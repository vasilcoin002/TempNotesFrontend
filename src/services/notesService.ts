import { TypeNote } from "@/types";
import axios from "axios";

class NotesService {
  private userId = "65df98471e44df48ce57c60f";

  // TODO connect getUserNotes in notesService to notesSlice
  async getUserNotes() {
    const responce = await axios.get<TypeNote[]>(
      "http://localhost:8080/api/v1/notes/userNotes?userId=" + this.userId
    )
    return responce.data;
  }

  async addUserNote(title: string, description: string, expirationDate?: string) {
    const responce = await axios.post(
      "http://localhost:8080/api/v1/notes",
      {
        userId: this.userId,
        title,
        description,
        expirationDate,
      }
    )
    return responce.data
  }

  async updateUserNote(id: string, title: string, description: string, expirationDate?: string) {
    const responce = await axios.put(
      "http://localhost:8080/api/v1/notes/note",
      {
        id,
        title,
        description,
        expirationDate,
      }
    )
    return responce.data
  }

  async updateUserNotesOrder(newNotesIdList: string[]) {
    const response = await axios.put(
      "http://localhost:8080/api/v1/notes/updateUserNotesOrder",
      {
        userId: this.userId,
        newNotesIdList,
      }
    );
    return response.data;
  }
}

export const notesService = new NotesService();
