import { TypeNote, TypeThemeColor } from "@/types";
import { Note } from "./Note";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";


export default function NotesContainer () {
  const notes: TypeNote[] = useSelector(
    (state: RootState) => state.notes.notes
  )
  const themeColor: TypeThemeColor = useSelector(
    (state: RootState) => state.theme.themeColor
  )
  return (
    <div className="notes-container">
      {
        notes.length !== 0 ? notes.map(
            (note) => <Note 
                key={note.id}
                title={note.title} 
                description={note.description}
                expiresAt={note.expiresAt}
            />
        )
        :
        <h1 className={
          "notes-container-empty__title text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 " 
          + themeColor
        }>
          You haven't got notes
          </h1>
      }
    </div>
  );
}
