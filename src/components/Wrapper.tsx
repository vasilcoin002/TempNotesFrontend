import { RootState } from "@/state/store";
import { TypeThemeColor } from "@/types";
import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";

const Wrapper = ({children}: PropsWithChildren) => {
  const themeColor: TypeThemeColor = useSelector(
    (state: RootState) => state.theme.themeColor
  )
  return (
    <div className={'wrapper ' + themeColor}>
      {children}
    </div>
  )
};

export default Wrapper;
