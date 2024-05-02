import './styles/shadcn.css'
import './styles/App.css'
import Wrapper from './components/bodySubComponents/Wrapper';
import LoginPage from "@/pages/AuthenticationPage/LoginPage.tsx";

function App() {
    return (
        <Wrapper>
          <LoginPage/>
        </Wrapper>
    )
}

export default App
