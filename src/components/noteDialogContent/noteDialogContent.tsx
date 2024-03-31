import { useThemeColor } from "@/hooks/hooks"
import { Button } from "../ui/button"
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import { Textarea } from "../ui/textarea"
import { Input } from "../ui/input"
import { useEffect, useState } from "react"
import { notesService } from "@/services/notesService"
import { toast } from "../ui/use-toast"
import CalendarButton from "./calendarButton"
import ExpirationDateSwitcher from "./expirationDateSwitcher"
import ExpirationDateText from "./expirationDateText"

type TypeNoteDialogContentProps = {
  noteId?: string,
  initialTitle: string,
  initialDescription: string,
  initialIsExpirationDateDisabled: boolean,
  initialExpirationDate?: string,
  dialogTitle: string,
  saveFn: TypeSaveFn,
  open: boolean,
}

export type TypeSaveFn = (note: {
  id?: string,
  title: string, 
  description: string, 
  expirationDate: Date | undefined
}) => Promise<void>

type TypeCheckNoteArgsProps = {
  title: string,
  description: string,
  isExpirationDateDisabled: boolean,
  expirationDate: Date | undefined
}

type TypeSaveNoteProps = {
  noteId: string | undefined,
  title: string, 
  description: string,
  isExpirationDateDisabled: boolean,
  expirationDate: Date | undefined,
  saveFn: TypeSaveFn
}

const checkNoteArgs = ({title, description, isExpirationDateDisabled, expirationDate}: TypeCheckNoteArgsProps) => {
  const noteArgumentsCheck = notesService.getCheckingOfNoteArgs(
    title, description, isExpirationDateDisabled, expirationDate
  )
  if (!noteArgumentsCheck.correct) {
    toast({title: "Error has occured", description: noteArgumentsCheck.error})
    return false
  }
  return true
}

const saveNote = (
  {noteId, title, description, isExpirationDateDisabled, expirationDate, saveFn}: TypeSaveNoteProps
) => {
  if (checkNoteArgs({title, description, isExpirationDateDisabled, expirationDate})) {
    // TODO make the save button work
    saveFn({
      id: noteId, 
      title, 
      description, 
      expirationDate: isExpirationDateDisabled ? undefined : expirationDate
    })
  }
}

const getExpirationDateFromString = (expirationDate: string | undefined) => {
  return expirationDate ? new Date(expirationDate) : undefined
}

const NoteDialogContent = ({
  noteId,
  initialTitle, 
  initialDescription, 
  initialIsExpirationDateDisabled, 
  initialExpirationDate,
  dialogTitle,
  saveFn,
  open: isDialogWindowOpened,
}: TypeNoteDialogContentProps) => {
  // FIXME fix the scrolling down of the page after clothing dialog window
  const themeColor = useThemeColor()
  const [title, setTitle] = useState<string>(initialTitle)
  const [description, setDescription] = useState<string>(initialDescription)
  const [isExpirationDateDisabled, setIsExpirationDateDisabled] = 
      useState<boolean>(initialIsExpirationDateDisabled)
  const [expirationDate, setExpirationDate] = 
      useState<Date | undefined>(getExpirationDateFromString(initialExpirationDate))

  useEffect(() => {
    if (isDialogWindowOpened) {
      setTitle(initialTitle)
      setDescription(initialDescription)
      setIsExpirationDateDisabled(initialIsExpirationDateDisabled)
      setExpirationDate(getExpirationDateFromString(initialExpirationDate))
    }
  }, [isDialogWindowOpened])

  return (
    <DialogContent className={themeColor}>
      <DialogHeader className={"dialog-header " + themeColor}>
        <DialogTitle>{dialogTitle}</DialogTitle>
      </DialogHeader>
      <div>
        <div className="dialog-fields-container mb-[5px]">
          <Input 
            className={"dialog-textarea dialog-title ring-0 ring-offset-0 " + themeColor} 
            placeholder="Write note's title here..."
            onChange={(e) => {setTitle(e.target.value)}}
            value={title}
          />
          <CalendarButton 
              expirationDate={expirationDate} 
              isExpirationDateDisabled={isExpirationDateDisabled} 
              setExpirationDate={setExpirationDate}
          />
          <Textarea 
            className={"dialog-textarea dialog-description " + themeColor} 
            placeholder="Write note's description here..."
            onChange={(e) => {setDescription(e.target.value)}}
            value={description}
          />
        </div>
        <div className="flex justify-between items-center">
          <ExpirationDateSwitcher 
              isExpirationDateDisabled={isExpirationDateDisabled} 
              setIsExpirationDateDisabled={setIsExpirationDateDisabled}
          />
          <ExpirationDateText 
              expirationDate={expirationDate} 
              isExpirationDateDisabled={isExpirationDateDisabled}
          />
        </div>
      </div>
      <DialogFooter className={themeColor}>
        <Button 
            onClick={() => saveNote({noteId, title, description, isExpirationDateDisabled, expirationDate, saveFn})}>
          Save
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}

export default NoteDialogContent