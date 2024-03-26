import { useThemeColor } from "@/hooks/hooks"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"

type Props = {
  dateDisabled: boolean,
  setDateDisabled: React.Dispatch<React.SetStateAction<boolean>>
}

const ExpirationDateSwitcher = ({dateDisabled, setDateDisabled}:Props) => {
  const themeColor = useThemeColor()
  return (
    <div className="flex items-center gap-[3px]">
      <Switch checked={!dateDisabled} onCheckedChange={() => setDateDisabled(!dateDisabled)} id="date-switcher"/>
      <Label className={"dialog-switcher-label " + themeColor} htmlFor="date-switcher">
        {"Expiration date " + (dateDisabled ? "off" : "on")}
      </Label>
    </div>
  )
}

export default ExpirationDateSwitcher