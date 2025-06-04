import { useThemeColor, useUserNotes } from "@/hooks/hooks"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import AddNoteDialogContent from "./addNoteDialogContent"
import { useState } from "react"

const AddNoteButton = () => {
  const themeColor = useThemeColor()
  const {notes, status} = useUserNotes()
  const [open, setOpen] = useState<boolean>(false)
  return (
    (status === "succeeded" || (status === "isLoading" && notes.length > 0)) &&
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={"add-note-button rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " + themeColor}>
        <div className={"add-note-button__internal-container " + themeColor}>
          <div className="add-note-button__text-block"> 
            {/*DO NOT CHANGE IT! it's not text, because in this case text is rendered badly*/}
            <span className={"add-note-button__text-span vertical " + themeColor}></span>
            <span className={"add-note-button__text-span horizontal " + themeColor}></span>
          </div>
        </div>
      </DialogTrigger>
      <AddNoteDialogContent open={open} setOpen={setOpen}/>
    </Dialog>
  )
}

export default AddNoteButton