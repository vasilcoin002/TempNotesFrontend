import { useThemeColor, useUserNotes } from "@/hooks/hooks"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import AddNoteDialogContent from "./addNoteDialogContent"
import { useState } from "react"

const AddNoteButton = () => {
  const themeColor = useThemeColor()
  const {status} = useUserNotes()
  const [open, setOpen] = useState<boolean>(false)
  return (
    status === "succeeded" &&
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className={"add-note-button " + themeColor}>
          <span className="add-note-button__text">+</span>
        </div>
      </DialogTrigger>
      <AddNoteDialogContent open={open}/>
    </Dialog>
  )
}

export default AddNoteButton