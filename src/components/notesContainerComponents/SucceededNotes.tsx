import { useUserNotes } from "@/hooks/hooks"
import { Note } from "../note/Note"

const SucceededNotes = () => {
  const {notes} = useUserNotes()
  return (
    notes.map(
      // FIXME give id prop to the Note component
      note => <Note
        key={note.id} id={note.id} title={note.title} description={note.description} expirationDate={note.expirationDate}
      />
    )
  )
}

export default SucceededNotes