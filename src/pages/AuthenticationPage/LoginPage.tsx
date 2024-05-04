import {useThemeColor} from "@/hooks/hooks.ts";
import AuthenticationPage from "@/components/authentication/AuthenticationPage.tsx";

// TODO link authFn to LoginPage
// TODO make the create account and forgot password links work
// TODO refactor it to the AuthenticationPage and make it reusable to allow RegisterPage and LoginPage implement AuthenticationPage
const LoginPage = () => {
  const themeColor = useThemeColor()
  return (
    <AuthenticationPage authFn={(email, password) => {console.log(email, password)}} title={"Sign in"} alternativeBlock={
      <div className="alternative-row">
        <a href="" className={"alternative-link " + themeColor}
           onClick={() => null}
        >Create account</a>
        <a href="" onClick={() => null}
           className={"alternative-link " + themeColor}
        >Forgot password?</a>
      </div>
    }/>
  );
};

export default LoginPage;
