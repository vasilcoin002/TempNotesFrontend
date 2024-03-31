import { notesService } from "@/services/notesService"
import NoteDialogContent, { TypeSaveFn } from "../noteDialogContent/noteDialogContent"

type Props = {
  open: boolean
}

// TODO make it through notesSlice
const saveFn: TypeSaveFn = ({title, description, expirationDate}) => 
    notesService.addUserNote(title, description, expirationDate)

const AddNoteDialogContent = ({open}: Props) => {
  return (
    <NoteDialogContent
      dialogTitle="Create your note" 
      initialTitle="" 
      initialDescription="" 
      initialIsExpirationDateDisabled={true}
      saveFn={saveFn}
      open={open}
    />
  )
}

export default AddNoteDialogContent