import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useThemeColor} from "@/hooks/hooks.ts";
import {ReactNode, useRef} from "react";

type Props = {
  alternativeBlock?: ReactNode,
  title: string,
  authFn: (email: string, password: string) => void
}

// TODO create RegistrationPage with reusable AuthenticationPage
// TODO add email and password validation
// TODO add error handling(like "provided wrong data")
// TODO add outline on alternative links when they selected on tab
const AuthenticationPage = ({alternativeBlock, title, authFn}: Props) => {
  const themeColor = useThemeColor()
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const getEmail = () => emailRef.current ? emailRef.current.value : ""
  const getPassword = () => passwordRef.current ? passwordRef.current.value : ""
  return (
    <div className={"authentication-page " + themeColor}>
      <form className="authentication-card">
        <h1 className={"title " + themeColor}>{title}</h1>
        <div className="input-block">
          <Input ref={emailRef} type={"email"} placeholder={"Email"} className={"input " + themeColor}/>
          <Input ref={passwordRef} type={"password"} placeholder={"Password"} className={"input " + themeColor}/>
          <div className={"alternative-block " + themeColor}>
            {alternativeBlock}
          </div>
        </div>
        <Button variant={"default"} type={"submit"} className={"submit-button " + themeColor}
                onClick={e => {
                    e.preventDefault()
                    authFn(getEmail(), getPassword())
        }}>Submit</Button>
      </form>
    </div>
  );
};

export default AuthenticationPage;
