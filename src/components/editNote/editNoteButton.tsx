import { useThemeColor } from '@/hooks/hooks';
import { TypeNote } from '@/types';
import { Dialog, DialogTrigger } from '../ui/dialog';
import EditNoteDialogContent from './editNoteDialogContent';
import { useState } from 'react';
import Note from '../notesContainerComponents/Note';

const EditNoteButton = ({id, title, description, expirationDate}: TypeNote) => {
  const themeColor = useThemeColor()
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={"note-container rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " + themeColor}>
        <Note id={id} title={title} description={description} expirationDate={expirationDate}/>
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