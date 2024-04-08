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

  // TODO make the addUserNote method work
  async addUserNote(title: string, description: string, expirationDate?: Date) {
    const responce = await axios.post(
      "http://localhost:8080/api/v1/notes",
      {
        userId: this.userId,
        title,
        description,
        expirationDate: expirationDate ? this.getStringFromExpirationDate(expirationDate) : undefined,
      }
    )
    return responce.data
  }

  // TODO make the updateUserNote method work
  async updateUserNote(id: string, title: string, description: string, expirationDate?: Date) {
    console.log([id, title, description, expirationDate]);
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

  getCheckingOfNoteArgs(
    title: string,
    description: string,
    isExpirationDateDisabled: boolean,
    expirationDate?: Date
  ) {
    const state: { correct: boolean; error: string | null } = {
      correct: true,
      error: null,
    };
    const now = Date.now();
    if (title === "" && description === "") {
      state.error = "Title or description must be given";
      state.correct = false;
      return state;
    } else if (
      isExpirationDateDisabled === false &&
      expirationDate === undefined
    ) {
      state.error = "Please, select the date or disable it";
      state.correct = false;
      return state;
    } else if (
      isExpirationDateDisabled === false &&
      expirationDate &&
      expirationDate.getTime() <= now
    ) {
      state.error = "Please, select the day which is after today";
      state.correct = false;
      return state;
    }
    return state;
  }

  getStringFromExpirationDate = (date: Date) => {
    return date.getFullYear() + "-" + (String(date.getMonth() + 1).padStart(2, "0")) + "-" + String(date.getDate()).padStart(2, "0")
  }

  getExpirationDateFromString = (expirationDate: string | undefined) => {
    return expirationDate ? new Date(expirationDate) : undefined
  }
}

export const notesService = new NotesService();
