import { useUserNotes } from "@/hooks/hooks";
import EditNoteButton from "../editNote/editNoteButton";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

// FIXME restrict the screen of draging notes, because it can be grabbed beyond body
// FIXME fix the bug with disappeared addNoteButton
// FIXME If drag of note was triggered ocasionally, then don't send request to backend
// FIXME make the replacing of notes working instead of just dragging them
const SucceededNotes = () => {
  const { notes } = useUserNotes();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter}>
      <SortableContext items={notes}>
        {notes.map((note) => (
          <EditNoteButton
            id={note.id}
            title={note.title}
            description={note.description}
            expirationDate={note.expirationDate}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default SucceededNotes;
