import { useThemeColor } from "@/hooks/hooks"
import { PropsWithChildren } from "react"

const Main = ({children}:PropsWithChildren) => {
  const themeColor = useThemeColor()
  return (
    <main className={themeColor}>
      {children}
    </main>
  )
}

export default Main