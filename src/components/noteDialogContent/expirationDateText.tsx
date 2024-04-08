import { useThemeColor } from "@/hooks/hooks"
import { notesService } from "@/services/notesService"

type Props = {
  expirationDate: Date | undefined,
  isExpirationDateDisabled: boolean
}

const isExpirationDateNeedsBeRendered = ({expirationDate, isExpirationDateDisabled}: Props) => {
  if (expirationDate === undefined || isExpirationDateDisabled) {
    return false
  }
  return true
}


const ExpirationDateText = ({expirationDate, isExpirationDateDisabled}: Props) => {
  const themeColor = useThemeColor()
  return (
        <span className={"dialog-select-button " + themeColor}>
          {
            isExpirationDateNeedsBeRendered({expirationDate, isExpirationDateDisabled}) ? 
            ("Expiration date: " + notesService.getStringFromExpirationDate(expirationDate as Date))
            :
            "No expiration date"
          }
        </span>
  )
}

export default ExpirationDateText