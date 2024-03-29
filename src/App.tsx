import './shadcn.css'
import './App.css'
import ChangeThemeButton from './components/ui/changeThemeButton';
import NotesContainer from './components/notesContainerComponents/NotesContainer';
import Wrapper from './components/bodySubComponents/Wrapper';
import Header from './components/bodySubComponents/Header';
import Main from './components/bodySubComponents/Main';
import UserDropdownMenuButton from './components/UserDropdownMenuButton';
import { } from './components/ui/button';
import AddNoteButton from './components/addNote/addNoteButton';
import { Toaster } from './components/ui/toaster';

function App() {
    return (
        <Wrapper>
            <Header>
                <ChangeThemeButton/>
                {/* TODO create search note input */}
                <UserDropdownMenuButton/>
            </Header>
            <Main>
                <NotesContainer/> {/* TODO add dialog window to the note when it is clicked */}
                <AddNoteButton/>
                <Toaster/>
            </Main>
        </Wrapper>
    )
}

export default App
