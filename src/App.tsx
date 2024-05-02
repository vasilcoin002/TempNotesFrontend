import './styles/shadcn.css'
import './styles/App.css'
import Wrapper from './components/bodySubComponents/Wrapper';
import NotesPage from "@/pages/NotesPage.tsx";

function App() {
    return (
        <Wrapper>
          <NotesPage/>
        </Wrapper>
    )
}

export default App
