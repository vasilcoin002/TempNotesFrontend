import axios from "axios";

class NotesService {
  private urlGetUserNotes =
    "http://localhost:8080/api/v1/notes/userNotes?userId=";
  private userId = "65df98471e44df48ce57c60f";

  // TODO connect getUserNotes in notesService to notesSlice
  async getUserNotes(userId: string) {
    // const {data} = await axios.get<TypeNote[]>(this.urlGetUserNotes + userId)
    const data = await fetch(this.urlGetUserNotes + userId);
    return data.json();
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
