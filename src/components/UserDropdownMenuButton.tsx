import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useThemeColor } from "@/hooks/hooks"

const UserDropdownMenuButton = () => {
  const themeColor = useThemeColor()
  return (
    <Avatar className={"avatar w-[40px] h-[40px] overflow-hidden cursor-pointer " + themeColor}>
      <AvatarImage alt='avatar'/>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}

export default UserDropdownMenuButton