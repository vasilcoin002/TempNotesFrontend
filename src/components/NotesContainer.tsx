import { TypeNote, TypeThemeColor } from "@/types";
import { Note } from "./Note";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";


export default function NotesContainer () {
  const notes: TypeNote[] | null = useSelector(
    (state: RootState) => state.notes.notes
  )
  const themeColor: TypeThemeColor = useSelector(
    (state: RootState) => state.theme.themeColor
  )
  return (
    <div className="notes-container">
      {
        notes !== null ? 
          notes.length !== 0 ?notes.map(
            (note) => <Note 
                key={note.id}
                title={note.title} 
                description={note.description}
                expiresAt={note.expiresAt}
            />
          )
          :
          <h1 className={"notes-container__text " + themeColor}>You haven't got notes</h1>
        :
        <h1 className={"notes-container__text " + themeColor}>Failed to load notes</h1>
        }
    </div>
  );
}
