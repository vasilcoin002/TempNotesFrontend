import { RootState } from "@/state/store"
import { PropsWithChildren } from "react"
import { useSelector } from "react-redux"

const Header = ({children}:PropsWithChildren) => {
  const themeColor = useSelector(
    (state:RootState) => state.theme.themeColor
  )
  return (
    <header className={'flex justify-between py-3 px-6 ' + themeColor}>
      {children}
    </header>
  )
}
export default Header