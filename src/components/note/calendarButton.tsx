import { useThemeColor } from "@/hooks/hooks"
import { Calendar } from "../ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { useState } from "react"

type Props = {
  expirationDate: Date | undefined,
  isExpirationDateDisabled: boolean,
  setExpirationDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}

const CalendarButton = ({expirationDate, isExpirationDateDisabled, setExpirationDate}:Props) => {
  const themeColor = useThemeColor()
  const [isOpened, setIsOpened] = useState<boolean>(false)
  return (
    <Popover open={isOpened} onOpenChange={setIsOpened}>
      <PopoverTrigger className={"dialog-calendar-button-container dialog-calendar-button rounded-md flex justify-center items-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=open]:ring-offset-background data-[state=open]:outline-none data-[state=open]:ring-2 data-[state=open]:ring-ring data-[state=open]:ring-offset-2 " + themeColor}>
        <img
          className={"dialog-calendar-icon " + (isExpirationDateDisabled ? "disabled" : "")}
          src={isExpirationDateDisabled ? "/calendar_disabled.png" : "/calendar_" + themeColor + ".png"} 
          alt="calendar"
        />
      </PopoverTrigger>
      <PopoverContent className={"dialog-popover-content " + themeColor}>
        <Calendar
          className={"dialog-calendar " + themeColor}
          mode="single"
          selected={expirationDate}
          onSelect={setExpirationDate}
          disabled={isExpirationDateDisabled}
        />
      </PopoverContent>
    </Popover>
  )
}

export default CalendarButton