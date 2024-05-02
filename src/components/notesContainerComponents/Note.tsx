import { useThemeColor } from "@/hooks/hooks"
import { TypeNote } from "@/types"
import { DraggableAttributes } from "@dnd-kit/core"
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities"

type Props = Omit<TypeNote, "id"> & {
  attributes: DraggableAttributes,
  listeners: SyntheticListenerMap | undefined,
}

const Note = ({title, description, expirationDate, attributes, listeners,}: Props) => {
  const themeColor = useThemeColor()
  return (
    <div className={'note ' + themeColor}>
      <div className='note__text-container note__text-container__two-items'>
        <h3 className={"note__text note__title " + themeColor}>{title}</h3>
        {/* TODO change the cursor from current to "move" on hover */}
        <img
          className={"note-dots-menu " + themeColor} 
          src={"/dots-menu_" + themeColor + ".png"} 
          alt="dots-menu"
          {...attributes}
          {...listeners}
          tabIndex={-1}
        />
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