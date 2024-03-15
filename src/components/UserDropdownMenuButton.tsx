import { RootState } from "@/state/store"
import { TypeThemeColor } from "@/types"
import { useSelector } from "react-redux"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const UserDropdownMenuButton = () => {
  const themeColor: TypeThemeColor = useSelector(
    (state: RootState) => state.theme.themeColor
  )
  return (
    <Avatar className={"avatar w-[40px] h-[40px] overflow-hidden cursor-pointer " + themeColor}>
      <AvatarImage alt='avatar'/>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}

export default UserDropdownMenuButton