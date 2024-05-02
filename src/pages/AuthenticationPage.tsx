import {Input} from "@/components/ui/input.tsx";
import {useThemeColor} from "@/hooks/hooks.ts";

const AuthenticationPage = () => {
  const themeColor = useThemeColor()
  return (
    <div className={"authentication-page " + themeColor}>
      <Input className={themeColor}/>
    </div>
  );
};

export default AuthenticationPage;
