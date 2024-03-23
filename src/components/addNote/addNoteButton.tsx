import { useThemeColor, useUserNotes } from "@/hooks/hooks"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import AddNoteDialogContent from "./addNoteDialogContent"

const AddNoteButton = () => {
  const themeColor = useThemeColor()
  const {status} = useUserNotes()
  return (
    status === "succeeded" && 
    <Dialog>
      <DialogTrigger>
        <div className={"add-note-button " + themeColor}>
          <span className="add-note-button__text">+</span>
        </div>
      </DialogTrigger>
      <AddNoteDialogContent/>
    </Dialog>
  )
}

export default AddNoteButton