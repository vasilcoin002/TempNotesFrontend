import { PropsWithChildren } from "react"

const Main = ({children}:PropsWithChildren) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default Main