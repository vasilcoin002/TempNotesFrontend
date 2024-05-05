import './styles/shadcn.css'
import './styles/App.css'
import Wrapper from './components/bodySubComponents/Wrapper';
import RegisterPage from "@/pages/AuthenticationPage/RegisterPage.tsx";

function App() {
    return (
        <Wrapper>
          <RegisterPage/>
        </Wrapper>
    )
}

export default App
