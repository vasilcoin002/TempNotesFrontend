import { TypeNote } from "@/types";
import { Note } from "./Note";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";


export default function NotesContainer () {
  const notes: TypeNote[] = useSelector(
    (state: RootState) => state.notes.notes
  )
  return (
    <div className="notes-container">
      {
        notes.map(
            (note) => <Note 
                key={note.id}
                title={note.title} 
                description={note.description}
                expiresAt={note.expiresAt}
            />
        )
      }
    </div>
  );
}
