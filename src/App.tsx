import './styles/shadcn.css'
import './styles/App.css'
import Wrapper from './components/bodySubComponents/Wrapper';
import LoginPage from "@/pages/AuthenticationPage/LoginPage.tsx";


// TODO add appRouter
// TODO create the archive of notes from which you can restore notes till the default specified time
// TODO create the default time of expiration note from today, when restoring note from archive or creating note, before the specifying time

function App() {
    return (
        <Wrapper>
          <LoginPage/>
          {/* <NotesPage/> */}
        </Wrapper>
    )
}

export default App
