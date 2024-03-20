import { useThemeColor } from "@/hooks/hooks";
import { PropsWithChildren } from "react";

const Wrapper = ({children}: PropsWithChildren) => {
  const themeColor = useThemeColor()
  return (
    <div className={'wrapper ' + themeColor}>
      {children}
    </div>
  )
};

export default Wrapper;
