import { useUserNotes } from "@/hooks/hooks"
import { Note } from "../note/Note"

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