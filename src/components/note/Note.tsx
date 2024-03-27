import { useThemeColor } from '@/hooks/hooks';
import { TypeNote } from '@/types';
import { Dialog, DialogTrigger } from '../ui/dialog';
import EditNoteDialogContent from './editNoteDialogContent';

export function Note ({title, description, expiresAt}: Omit<TypeNote, "id">) {
  const themeColor = useThemeColor()
  return (
    <Dialog>
      <DialogTrigger className={themeColor}>
        <div className={'note ' + themeColor}>
          <div className='text-start'>
            <h3 className="note__title">{title}</h3>
            <p className="note__description">{description}</p>
          </div>
          <p className="note__expiresAt">Expires at: {expiresAt}</p>
        </div>
      </DialogTrigger>
      <EditNoteDialogContent title={title} description={description} expirationDate={expiresAt}/>
    </Dialog>
  );
}
