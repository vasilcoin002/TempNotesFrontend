import { useThemeColor } from "@/hooks/hooks"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"

type Props = {
  isExpirationDateDisabled: boolean,
  setIsExpirationDateDisabled: React.Dispatch<React.SetStateAction<boolean>>
}

const ExpirationDateSwitcher = ({isExpirationDateDisabled, setIsExpirationDateDisabled}:Props) => {
  const themeColor = useThemeColor()
  return (
    <div className="flex items-center gap-[3px]">
      <Switch checked={!isExpirationDateDisabled} onCheckedChange={() => setIsExpirationDateDisabled(!isExpirationDateDisabled)} id="date-switcher"/>
      <Label className={"dialog-switcher-label " + themeColor} htmlFor="date-switcher">
        {"Expiration date " + (isExpirationDateDisabled ? "off" : "on")}
      </Label>
    </div>
  )
}

export default ExpirationDateSwitcher