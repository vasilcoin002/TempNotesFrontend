import { useThemeColor, useUserNotes } from "@/hooks/hooks"

const AddNoteButton = () => {
  const themeColor = useThemeColor()
  const {status} = useUserNotes()
  return (
    status === "succeeded" && 
    <div className={"add-note-button " + themeColor}>
      <span className="add-note-button__text">+</span>
    </div>
  )
}

export default AddNoteButton