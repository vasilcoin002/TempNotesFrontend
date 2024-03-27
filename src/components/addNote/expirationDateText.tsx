import { useThemeColor } from "@/hooks/hooks"

type Props = {
  expirationDate: Date | undefined,
  isDateDisabled: boolean
}

const isExpirationDateNeedsBeRendered = ({expirationDate, isDateDisabled}: Props) => {
  if (expirationDate === undefined || isDateDisabled) {
    return false
  }
  return true
}

const getFormatedDate = (date: Date) => {
  return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
}

const ExpirationDateText = ({expirationDate, isDateDisabled}: Props) => {
  const themeColor = useThemeColor()
  return (
        <span className={"dialog-select-button " + themeColor}>
          {
            isExpirationDateNeedsBeRendered({expirationDate, isDateDisabled}) ? 
            ("Expiration date: " + getFormatedDate(expirationDate as Date))
            :
            "No expiration date"
          }
        </span>
  )
}

export default ExpirationDateText