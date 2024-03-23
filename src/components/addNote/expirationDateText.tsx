import { useThemeColor } from "@/hooks/hooks"

type Props = {
  date: Date | undefined,
  dateDisabled: boolean
}

const ExpirationDateText = ({date, dateDisabled}: Props) => {
  const themeColor = useThemeColor()
  const isRenderDate = () => {
    if (date === undefined || dateDisabled) {
      return false
    }
    return true
  }
  const getFormatedDate = (date: Date) => {
    return date.getDate() + "." + date.getMonth() + "." + date.getFullYear()
  }
  return (
    
      isRenderDate() ? 
        <span className={"dialog-select-button " + themeColor}>{"Expiration date: " + getFormatedDate(date as Date)}</span>
        :
        <span className={"dialog-select-button " + themeColor}>No expiration date</span>

  )
}

export default ExpirationDateText