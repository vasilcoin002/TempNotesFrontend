import { Note } from "./Note"
import { useUserNotes } from "@/hooks/hooks"

const SucceededNotes = () => {
  const {notes} = useUserNotes()
  return (
    notes.map(
      note => <Note 
        key={note.id} title={note.title} description={note.description} expiresAt={note.expiresAt}
      />
    )
  )
}

export default SucceededNotes