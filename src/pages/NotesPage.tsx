import Header from "@/components/bodySubComponents/Header.tsx";
import ChangeThemeButton from "@/components/ui/changeThemeButton.tsx";
import UserDropdownMenuButton from "@/components/UserDropdownMenuButton.tsx";
import Main from "@/components/bodySubComponents/Main.tsx";
import NotesContainer from "@/components/notesContainerComponents/NotesContainer.tsx";
import AddNoteButton from "@/components/addNote/addNoteButton.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";
import "@/styles/NotesPage.css"

const NotesPage = () => {
  return (
    <>
      {/* TODO Create auto-save of notes for some time */}
      <Header>
        <ChangeThemeButton/>
        {/* TODO create search note input */}
        <UserDropdownMenuButton/>
      </Header>
      <Main>
        <NotesContainer/>
        <AddNoteButton/>
        <Toaster/>
      </Main>
    </>
  );
};

export default NotesPage;
