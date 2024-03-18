import { TypeNote, TypeNotesStateError, TypeNotesStateLoading, TypeThemeColor } from "@/types";
import { Note } from "./Note";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";


export default function NotesContainer () {
  const notes: TypeNote[] | undefined = useSelector(
    (state: RootState) => state.notes.notes
  )
  const loading: TypeNotesStateLoading = useSelector(
    (state: RootState) => state.notes.loading
  )
  const error: TypeNotesStateError = useSelector(
    (state: RootState) => state.notes.error
  )
  const themeColor: TypeThemeColor = useSelector(
    (state: RootState) => state.theme.themeColor
  )
  return (
    <div className="notes-container">
      {
        {
          "isLoading": <h1 className={"notes-container__text " + themeColor}>Notes are loading...</h1>,
          "error": <h1 className={"notes-container__text " + themeColor}>Failed to load notes: {error}</h1>,
          "succeeded": null,
        }[loading]
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
