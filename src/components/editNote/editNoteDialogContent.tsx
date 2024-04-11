import NoteDialogContent, { TypeSaveFn } from "../noteDialogContent/noteDialogContent"
import { useAppDispatch } from "@/hooks/hooks"
import { TypeNote } from "@/types"
import { updateUserNote } from "@/state/notes/notesSlice"
import { getStringOrUndefinedFromExpirationDate } from "@/utils/DataTransformation"

type Props = {
  id: string,
  title: string,
  description: string,
  expirationDate?: string,
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const EditNoteDialogContent = ({id, title, description, expirationDate, open, setOpen}: Props) => {
  const dispatch = useAppDispatch()
  const saveFn: TypeSaveFn = async ({id, title, description, expirationDate}) => {
    const expirationStringOrUndefined = getStringOrUndefinedFromExpirationDate(expirationDate)
    const note: TypeNote = {
      id: id as string, 
      title, 
      description,
      expirationDate: expirationStringOrUndefined
    }
    await dispatch(updateUserNote(note))
  }
  return (
    <NoteDialogContent
      dialogTitle="Edit note"
      noteId={id}
      initialTitle={title}
      initialDescription={description}
      initialIsExpirationDateDisabled={expirationDate ? false : true}
      initialExpirationDate={expirationDate ? expirationDate : undefined}
      saveFn={saveFn}
      open={open}
      setOpen={setOpen}
    />
  )
}

export default EditNoteDialogContent