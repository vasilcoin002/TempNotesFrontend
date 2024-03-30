import { useThemeColor } from '@/hooks/hooks';
import { TypeNote } from '@/types';
import { Dialog, DialogTrigger } from '../ui/dialog';
import EditNoteDialogContent from './editNoteDialogContent';
import { useState } from 'react';

// TODO replace it to notesContainerComponents
// TODO make it arrow function
const EditNoteButton = ({id, title, description, expirationDate}: TypeNote) => {
  const themeColor = useThemeColor()
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={"note-container " + themeColor}>
        <div className={'note ' + themeColor}>
          <div className='text-start'>
            <h3 className={"note__title " + themeColor}>{title}</h3>
            <p className={"note__description " + themeColor}>{description}</p>
          </div>
          <p className="note__expiresAt">{expirationDate ?  
              ("Expires at: " + expirationDate)
              : 
              ("Doesn't expire")}</p>
        </div>
      </DialogTrigger>
      <EditNoteDialogContent 
        id={id} 
        title={title} 
        description={description} 
        expirationDate={expirationDate} 
        open={open}
      />
    </Dialog>
  );
}

export default EditNoteButton