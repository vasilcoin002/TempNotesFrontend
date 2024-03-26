import { useThemeColor } from "@/hooks/hooks"
import { Calendar } from "../ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { useState } from "react"

type Props = {
  date: Date | undefined,
  dateDisabled: boolean,
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}

const CalendarButton = ({date, dateDisabled, setDate}:Props) => {
  const themeColor = useThemeColor()
  const [isOpened, setIsOpened] = useState<boolean>(false)
  return (
    <Popover>
      <PopoverTrigger onClick={() => setIsOpened(!isOpened)} className={"dialog-calendar-button-container " + themeColor}>
        <div className={
          "dialog-calendar-button rounded-md flex justify-center items-center " + themeColor
        }>
          <img 
            className={"dialog-calendar-icon " + (dateDisabled ? "disabled" : "")}
            src={dateDisabled ? "/calendar_disabled.png" : "/calendar_" + themeColor + ".png"} 
            alt="calendar"
          />
        </div>
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
  )
}

export default CalendarButton