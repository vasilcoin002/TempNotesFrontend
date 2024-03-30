import { notesService } from "@/services/notesService"
import NoteDialogContent, { TypeSaveFn } from "../note/noteDialogContent"

type Props = {
  id: string,
  title: string,
  description: string,
  expirationDate?: string
}

// TODO make it through notesSlice
const saveFn: TypeSaveFn = ({id, title, description, expirationDate}) => 
    notesService.updateUserNote(id as string, title, description, expirationDate)

const EditNoteDialogContent = ({id, title, description, expirationDate}: Props) => {
  return (
    <NoteDialogContent
      dialogTitle="Edit note"
      noteId={id}
      initialTitle={title}
      initialDescription={description}
      initialIsExpirationDateDisabled={expirationDate ? false : true}
      initialExpirationDate={expirationDate ? expirationDate : undefined}
      saveFn={saveFn}
    />
  )
}

export default EditNoteDialogContent