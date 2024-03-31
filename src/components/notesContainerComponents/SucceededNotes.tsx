import { useUserNotes } from "@/hooks/hooks"
import EditNoteButton from "../editNote/editNoteButton"

const SucceededNotes = () => {
  const {notes} = useUserNotes()
  return (
    notes.map(
      note => <EditNoteButton
        key={note.id} id={note.id} title={note.title} description={note.description} expirationDate={note.expirationDate}
      />
    )
  )
}

export default SucceededNotes