import { useThemeColor } from "@/hooks/hooks"
import { PropsWithChildren } from "react"

const Header = ({children}:PropsWithChildren) => {
  const themeColor = useThemeColor()
  return (
    <header className={themeColor}>
      {children}
    </header>
  )
}
export default Header