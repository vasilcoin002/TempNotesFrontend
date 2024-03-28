import { notesService } from "@/services/notesService"
import NoteDialogContent, { TypeSaveFn } from "../note/noteDialogContent"

// TODO make it through notesSlice
const saveFn: TypeSaveFn = (
  id, title, description, expirationDate
) => notesService.addUserNote(title, description, expirationDate)

const AddNoteDialogContent = () => {
  return (
    <NoteDialogContent
      dialogTitle="Create your note" 
      initialTitle="" 
      initialDescription="" 
      initialIsExpirationDateDisabled={true}
      saveFn={saveFn}
    />
  )
}

export default AddNoteDialogContent