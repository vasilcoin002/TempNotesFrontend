import { useThemeColor } from "@/hooks/hooks"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"

type Props = {
  isDateDisabled: boolean,
  setIsDateDisabled: React.Dispatch<React.SetStateAction<boolean>>
}

const ExpirationDateSwitcher = ({isDateDisabled, setIsDateDisabled}:Props) => {
  const themeColor = useThemeColor()
  return (
    <div className="flex items-center gap-[3px]">
      <Switch checked={!isDateDisabled} onCheckedChange={() => setIsDateDisabled(!isDateDisabled)} id="date-switcher"/>
      <Label className={"dialog-switcher-label " + themeColor} htmlFor="date-switcher">
        {"Expiration date " + (isDateDisabled ? "off" : "on")}
      </Label>
    </div>
  )
}

export default ExpirationDateSwitcher