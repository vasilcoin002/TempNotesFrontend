import { useThemeColor } from "@/hooks/hooks"
import { Button } from "../ui/button"
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import { Textarea } from "../ui/textarea"
import { Input } from "../ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Calendar } from "../ui/calendar"
import { useState } from "react"
import ExpirationDateText from "./expirationDateText"
import { Switch } from "../ui/switch"
import { Label } from "../ui/label"


const AddNoteDialogContent = () => {
  // TODO change the placement of the components: replace calendar next to title, change the expiration date label to be visible more
  // FIXME when it's light theme, calendar shows the monotone text color as the bg, so text is invisible
  const themeColor = useThemeColor()
  const [dateDisabled, setDateDisabled] = useState<boolean>(false)
  const [date, setDate] = useState<Date | undefined>(undefined)
  return (
    <DialogContent className={themeColor}>
      <DialogHeader className={"dialog-header " + themeColor}>
        <DialogTitle>Create your note</DialogTitle>
      </DialogHeader>
      <div>
        <Input className={"dialog-textarea dialog__title " + themeColor} placeholder="Write note's title here..."/>
        <Popover>
          <PopoverTrigger className="inline-block">
            <img 
              className={"dialog-calendar-icon " + (dateDisabled ? "disabled" : "")}
              src={dateDisabled ? "/calendar_disabled.png" : "/calendar_" + themeColor + ".png"} 
              alt="calendar"
            />
          </PopoverTrigger>
          <PopoverContent className={"dialog-popover-content " + themeColor}>
            <Calendar
              className={"dialog-calendar " + themeColor}
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={dateDisabled}
            />
          </PopoverContent>
        </Popover>
        <Textarea className={"dialog-textarea dialog__description " + themeColor} placeholder="Write note's description here..."/>
        <div>
          <Switch checked={!dateDisabled} onCheckedChange={() => setDateDisabled(!dateDisabled)} id="date-switcher"/>
          <Label className={"dialog-switcher-label " + themeColor} htmlFor="date-switcher">
            {(dateDisabled ? "Disabled" : "Enabled") + " expiration date"}
          </Label>
        </div>
        <ExpirationDateText date={date} dateDisabled={dateDisabled}/>
      </div>
      <DialogFooter className={themeColor}>
        <Button>Save</Button>
      </DialogFooter>
    </DialogContent>
  )
}

export default AddNoteDialogContent