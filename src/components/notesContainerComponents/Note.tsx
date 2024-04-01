import { useThemeColor } from "@/hooks/hooks"
import { TypeNote } from "@/types"

const Note = ({title, description, expirationDate}:  Omit<TypeNote, "id">) => {
  const themeColor = useThemeColor()
  return (
    <div className={'note ' + themeColor}>
      <div className='note__text-container'>
        <h3 className={"note__text note__title " + themeColor}>{title}</h3>
      </div>
      <div className='note__text-container'>
        <p className={"note__text note__description " + themeColor}>{description}</p>
      </div>
      <p className="note__text note__expiresAt">{expirationDate ?  
          ("Expires at: " + expirationDate)
          : 
          ("Doesn't expire")}
      </p>
    </div>
  )
}

export default Note