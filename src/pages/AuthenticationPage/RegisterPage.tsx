import {useAppDispatch, useThemeColor} from "@/hooks/hooks.ts";
import AuthenticationPage from "@/components/authentication/AuthenticationPage.tsx";
import {registerUser} from "@/state/authentication/authenticationSlice.ts";

const RegisterPage = () => {
  const themeColor = useThemeColor()
  const dispatch = useAppDispatch()
  return (
		<AuthenticationPage authFn={
      (email, password) => dispatch(registerUser({email, password}))
    } title={"Sign up"} alternativeBlock={
      <div className="alternative-row">
        <a href="" className={"alternative-link " + themeColor}
           onClick={() => null}
        >Already have an account?</a>
      </div>
    }/>
  )
};

export default RegisterPage;
