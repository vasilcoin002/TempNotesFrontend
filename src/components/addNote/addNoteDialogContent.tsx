import { addUserNote } from "@/state/notes/notesSlice"
import NoteDialogContent, { TypeSaveFn } from "../noteDialogContent/noteDialogContent"
import { useAppDispatch } from "@/hooks/hooks"
import { TypeNote } from "@/types"

type Props = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const AddNoteDialogContent = ({open, setOpen}: Props) => {
  const dispatch = useAppDispatch()
  const saveFn: TypeSaveFn = async ({title, description, expirationDate}) => {
    const expirationDateString = expirationDate ? expirationDate.toString() : undefined
    const note: TypeNote = {id: "",title, description,  expirationDate: expirationDateString}
    await dispatch(addUserNote(note))
  }
  return (
    <NoteDialogContent
      dialogTitle="Create your note" 
      initialTitle="" 
      initialDescription="" 
      initialIsExpirationDateDisabled={true}
      saveFn={saveFn}
      open={open}
      setOpen={setOpen}
    />
  )
}

export default AddNoteDialogContent