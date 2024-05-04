import {useAppDispatch, useThemeColor} from "@/hooks/hooks.ts";
import AuthenticationPage from "@/components/authentication/AuthenticationPage.tsx";
import {loginUser} from "@/state/authentication/authenticationSlice.ts";

// TODO make the create account and forgot password links work
const LoginPage = () => {
  const dispatch = useAppDispatch()
  const themeColor = useThemeColor()
  return (
    <AuthenticationPage authFn={
      (email, password) => dispatch(loginUser({email, password}))
    } title={"Sign in"} alternativeBlock={
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
