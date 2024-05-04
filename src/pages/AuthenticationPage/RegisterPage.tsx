import {useThemeColor} from "@/hooks/hooks.ts";
import AuthenticationPage from "@/components/authentication/AuthenticationPage.tsx";

const RegisterPage = () => {
  const themeColor = useThemeColor()
  return (
    <AuthenticationPage authFn={(email, password) => {console.log(email, password)}} title={"Sign up"} alternativeBlock={
      <div className="alternative-row">
        <a href="" className={"alternative-link " + themeColor}
           onClick={() => null}
        >Already have an account?</a>
      </div>
    }/>
  )
};

export default RegisterPage;
