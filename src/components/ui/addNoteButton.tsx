import { useThemeColor, useUserNotes } from "@/hooks/hooks"
import { Button } from "./button"

const AddNoteButton = () => {
  const themeColor = useThemeColor()
  const {status} = useUserNotes()
  return (
    status === "succeeded" && <Button className="add-note-button"><span>Create Note</span></Button>
  )
}

export default AddNoteButton