import { useThemeColor } from '@/hooks/hooks';
import { TypeNote } from '@/types';
import { Dialog, DialogTrigger } from '../ui/dialog';
import EditNoteDialogContent from '../editNote/editNoteDialogContent';

// TODO replace it to notesContainerComponents
// TODO make it arrow function
export function Note ({id, title, description, expirationDate}: TypeNote) {
  const themeColor = useThemeColor()
  return (
    <Dialog>
      <DialogTrigger className={"note-container " + themeColor}>
        <div className={'note ' + themeColor}>
          <div className='text-start'>
            <h3 className="note__title">{title}</h3>
            <p className="note__description">{description}</p>
          </div>
          <p className="note__expiresAt">{expirationDate ?  
              ("Expires at: " + expirationDate) 
              : 
              ("Doesn't expire")}</p>
        </div>
      </DialogTrigger>
      <EditNoteDialogContent id={id} title={title} description={description} expirationDate={expirationDate}/>
    </Dialog>
  );
}
