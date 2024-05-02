import {TypeNote} from "@/types";
import axios from "axios";
import {authenticationService} from "@/services/authenticationService.ts";

class NotesService {

  async getUserNotes() {
    const response = await axios.get<TypeNote[]>(
      "http://localhost:8080/api/v1/notes/getNotes",
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + authenticationService.getAccessToken(),
        },
      }
    )
    return response.data;
  }

  async addUserNote(title: string, description: string, expirationDate?: string) {
    const response = await axios.post(
      "http://localhost:8080/api/v1/notes/addNote",
      {
        title,
        description,
        expirationDate,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + authenticationService.getAccessToken(),
        },
      }
    )
    return response.data
  }

  async updateUserNote(id: string, title: string, description: string, expirationDate?: string) {
    const response = await axios.put(
      "http://localhost:8080/api/v1/notes/updateNote",
      {
        id,
        title,
        description,
        expirationDate,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + authenticationService.getAccessToken(),
        },
      }
    )
    return response.data
  }

  async updateUserNotesOrder(newNotesIdList: string[]) {
    const response = await axios.put(
      "http://localhost:8080/api/v1/notes/updateUserNotesOrder",
      {
        notesIdList: newNotesIdList,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + authenticationService.getAccessToken(),
        },
      }
    );
    return response.data;
  }
}

export const notesService = new NotesService();
