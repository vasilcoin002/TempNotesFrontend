import { RootState } from "@/state/store"
import { TypeThemeColor } from "@/types"
import { PropsWithChildren } from "react"
import { useSelector } from "react-redux"

const Main = ({children}:PropsWithChildren) => {
  const themeColor: TypeThemeColor = useSelector(
    (state: RootState) => state.theme.themeColor
  )
  return (
    <main>
      {children}
    </main>
  )
}

export default Main