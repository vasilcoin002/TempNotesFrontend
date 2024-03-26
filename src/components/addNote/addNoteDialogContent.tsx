import { useThemeColor } from "@/hooks/hooks"
import { Button } from "../ui/button"
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import { Textarea } from "../ui/textarea"
import { Input } from "../ui/input"
import { useState } from "react"
import ExpirationDateText from "./expirationDateText"
import CalendarButton from "./calendarButton"
import ExpirationDateSwitcher from "./expirationDateSwitcher"
import { notesService } from "@/services/notesService"
import { toast } from "../ui/use-toast"


const AddNoteDialogContent = () => {
  // FIXME change useState of title and description into useRef values
  // FIXME try to return focus outlines on all of the components (and add it to calendar)
  const themeColor = useThemeColor()
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [dateDisabled, setDateDisabled] = useState<boolean>(false)
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <DialogContent className={themeColor}>
      <DialogHeader className={"dialog-header " + themeColor}>
        <DialogTitle>Create your note</DialogTitle>
      </DialogHeader>
      <div>
        <div className="dialog-fields-container mb-[5px]">
          <Input 
            className={"dialog-textarea dialog-title ring-0 ring-offset-0 " + themeColor} 
            placeholder="Write note's title here..."
            onChange={(e) => {setTitle(e.target.value)}}
          />
          <CalendarButton date={date} dateDisabled={dateDisabled} setDate={setDate}/>
          <Textarea 
            className={"dialog-textarea dialog-description " + themeColor} 
            placeholder="Write note's description here..."
            onChange={(e) => {setDescription(e.target.value)}}
          />
        </div>
        <div className="flex justify-between items-center">
          <ExpirationDateSwitcher dateDisabled={dateDisabled} setDateDisabled={setDateDisabled}/>
          <ExpirationDateText date={date} dateDisabled={dateDisabled}/>
        </div>
      </div>
      <DialogFooter className={themeColor}>
        <Button 
          onClick={() => {
            const noteArgumentsCheck = notesService.getCheckingOfCreatingNoteArguments(
              title, description, date, dateDisabled
            )
            if (!noteArgumentsCheck.correct) {
              console.log(noteArgumentsCheck.error)
              console.log(title)
              console.log(description)
              toast(
                {
                  title: "Error has occured",
                  description: noteArgumentsCheck.error
                }
              )
            }
          }}
        >
          Save
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}

export default AddNoteDialogContent