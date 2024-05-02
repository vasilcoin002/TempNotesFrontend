import {Input} from "@/components/ui/input.tsx";
import {useThemeColor} from "@/hooks/hooks.ts";
import "@/styles/AuthenticationPage.css"
import {Button} from "@/components/ui/button.tsx";
import React from "react";

const registerButtonHandler = (e: React.MouseEvent) => {
  e.preventDefault()
}

// TODO refactor it to the AuthenticationPage and make it reusable to allow RegisterPage and LoginPage implement AuthenticationPage
const LoginPage = () => {
  const themeColor = useThemeColor()
  return (
    <div className={"authentication-page " + themeColor}>
      <form className="authentication-card">
        <h1 className={"title " + themeColor}>Sign in</h1>
        <div className="input-block">
          <Input type={"email"} placeholder={"Email"} className={"input " + themeColor}/>
          <Input type={"password"} placeholder={"Password"} className={"input " + themeColor}/>
          <div className={"alternative-block " + themeColor}>
            <p className={"alternative-title " + themeColor}>No account?</p>
            <a href="" className={"alternative-link " + themeColor}
               onClick={e => registerButtonHandler(e)}
            >Create one!</a>
          </div>
        </div>
        <Button variant={"default"} type={"submit"} className={"submit-button " + themeColor}>Submit</Button>
      </form>
    </div>
  );
};

export default LoginPage;
