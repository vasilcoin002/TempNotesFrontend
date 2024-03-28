import { useThemeColor } from "@/hooks/hooks"

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

const getFormatedDate = (date: Date) => {
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
}

const ExpirationDateText = ({expirationDate, isExpirationDateDisabled}: Props) => {
  const themeColor = useThemeColor()
  return (
        <span className={"dialog-select-button " + themeColor}>
          {
            isExpirationDateNeedsBeRendered({expirationDate, isExpirationDateDisabled}) ? 
            ("Expiration date: " + getFormatedDate(expirationDate as Date))
            :
            "No expiration date"
          }
        </span>
  )
}

export default ExpirationDateText