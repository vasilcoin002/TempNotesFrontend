import { TypeNote, TypeNotesStateError, TypeNotesStateStatus, TypeThemeColor } from "@/types";
import { Note } from "./Note";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/state/store";
import { useEffect } from "react";
import { fetchUserNotesByUserId } from "@/state/notes/notesSlice";


export default function NotesContainer () {
  const dispatch = useDispatch<AppDispatch>()
  const notes: TypeNote[] | undefined = useSelector(
    (state: RootState) => state.notes.notes
  )
  const status: TypeNotesStateStatus = useSelector(
    (state: RootState) => state.notes.status
  )
  const error: TypeNotesStateError = useSelector(
    (state: RootState) => state.notes.error
  )
  const themeColor: TypeThemeColor = useSelector(
    (state: RootState) => state.theme.themeColor
  )
  useEffect(() => {
    dispatch(fetchUserNotesByUserId("aboba"))
  }, [dispatch])
  return (
    <div className="notes-container">
      {
        {
          "isLoading": <h1 className={"notes-container__text " + themeColor}>Notes are loading...</h1>,
          "error": <h1 className={"notes-container__text " + themeColor}>Failed to load notes: {error}</h1>,
          "succeeded": null,
        }[status]
        // notes !== undefined ? 
        //   notes.length !== 0 ?notes.map(
        //     (note) => <Note 
        //         key={note.id}
        //         title={note.title} 
        //         description={note.description}
        //         expiresAt={note.expiresAt}
        //     />
        //   )
        //   :
        //   <h1 className={"notes-container__text " + themeColor}>You haven't got notes</h1>
        // :
        // <h1 className={"notes-container__text " + themeColor}>Failed to load notes</h1>
      }
    </div>
  );
}
