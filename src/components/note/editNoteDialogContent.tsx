import { useThemeColor } from "@/hooks/hooks"
import { DialogContent, DialogHeader } from "../ui/dialog"

const EditNoteDialogContent = () => {
  const themeColor = useThemeColor()
  return (
    <DialogContent className={themeColor}>
      <DialogHeader>
        
      </DialogHeader>
    </DialogContent>
  )
}

export default EditNoteDialogContent