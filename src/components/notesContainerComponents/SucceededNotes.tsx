import { useAppDispatch, useUserNotes } from "@/hooks/hooks";
import EditNoteButton from "../editNote/editNoteButton";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { updateUserNotesOrder } from "@/state/notes/notesSlice";

// FIXME restrict the screen of draging notes, because it can be grabbed beyond body
// FIXME fix the bug with disappeared addNoteButton
const SucceededNotes = () => {
  const dispatch = useAppDispatch()
  const { notes } = useUserNotes();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const getRes = () => {
        const oldIndex = notes.findIndex((note) => note.id === active.id);
        const newIndex = notes.findIndex((note) => note.id === (over ? over.id : active.id));
        return arrayMove(notes, oldIndex, newIndex);
      }
      const res = getRes()
      dispatch(updateUserNotesOrder(res))
    }
  };
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={notes}>
        {notes.map((note) => <EditNoteButton
            key={note.id}
            id={note.id}
            title={note.title}
            description={note.description}
            expirationDate={note.expirationDate}
          />
        )}
      </SortableContext>
    </DndContext>
  );
};

export default SucceededNotes;
