import { TypeNote } from "@/types";
import { Note } from "./Note";

export interface INotesContainerProps {
    notes: TypeNote[]
}

export default function NotesContainer (props: INotesContainerProps) {
  return (
    <div className="notes-container">
      {
        props.notes.map(
            (note) => <Note 
                title={note.title} 
                description={note.description}
                expiresAt={note.expiresAt}
            />
        )
      }
    </div>
  );
}
