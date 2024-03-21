import './shadcn.css'
import './App.css'
import ChangeThemeButton from './components/ui/changeThemeButton';
import NotesContainer from './components/notesContainerComponents/NotesContainer';
import Wrapper from './components/bodySubComponents/Wrapper';
import Header from './components/bodySubComponents/Header';
import Main from './components/bodySubComponents/Main';
import UserDropdownMenuButton from './components/UserDropdownMenuButton';
import { } from './components/ui/button';
import AddNoteButton from './components/ui/addNoteButton';

function App() {
    return (
        <Wrapper>
            <Header>
                <ChangeThemeButton/>
                <UserDropdownMenuButton/>
            </Header>
            <Main>
                <NotesContainer/>
                <AddNoteButton/>
            </Main>
        </Wrapper>
    )
}

export default App
