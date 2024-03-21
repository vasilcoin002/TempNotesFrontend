import { useThemeColor, useUserFetchedNotes } from "@/hooks/hooks";
import SucceededNotes from "./SucceededNotes";


export default function NotesContainer () {
  const themeColor = useThemeColor()
  const {notes, status, error} = useUserFetchedNotes()
  
  return (
    <div className="notes-container">
      {
        {
          "isLoading": <h1 className={"notes-container__text " + themeColor}>Notes are loading...</h1>,
          "error": <h1 className={"notes-container__text " + themeColor}>Failed to load notes: {error}</h1>,
          "succeeded": notes.length !== 0 ? 
              <SucceededNotes/>
              : 
              <h1 className={"notes-container__text " + themeColor}>You haven't got notes</h1>
        }[status]
      }
    </div>
  );
}
