import { useThemeColor } from "@/hooks/hooks";
import { TypeNote } from "@/types";
import { Dialog, DialogTrigger } from "../ui/dialog";
import EditNoteDialogContent from "./editNoteDialogContent";
import { useState } from "react";
import Note from "../notesContainerComponents/Note";
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';

const EditNoteButton = ({
  id,
  title,
  description,
  expirationDate,
}: TypeNote) => {
  const themeColor = useThemeColor();
  const [open, setOpen] = useState<boolean>(false);
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: id});
  const style = {transform: CSS.Transform.toString(transform), transition};
  // TODO create the context menu in which you can select the note for deleting or instantly delete it
  return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger ref={setNodeRef} style={style} className={"note-container rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " + themeColor}>
          <Note title={title} description={description} expirationDate={expirationDate} attributes={attributes} listeners={listeners}/>
        </DialogTrigger>
        <EditNoteDialogContent
          id={id}
          title={title}
          description={description}
          expirationDate={expirationDate}
          open={open}
          setOpen={setOpen}
        />
      </Dialog>
  );
};

export default EditNoteButton;
