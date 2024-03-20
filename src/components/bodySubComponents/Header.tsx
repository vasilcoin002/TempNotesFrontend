import { useThemeColor } from "@/hooks/hooks"
import { PropsWithChildren } from "react"

const Header = ({children}:PropsWithChildren) => {
  const themeColor = useThemeColor()
  return (
    <header className={'flex justify-between py-3 px-6 ' + themeColor}>
      {children}
    </header>
  )
}
export default Header