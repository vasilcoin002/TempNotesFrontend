import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/state/store.ts";
import {toggleThemeColor} from "@/state/theme/themeColorSlice";
import {TypeThemeColor} from "@/types.ts";
import { useAppDispatch, useThemeColor } from "@/hooks/hooks";


function ChangeThemeButton() {
    const themeColor = useThemeColor();
    const dispatch = useAppDispatch();
    return (
        <div className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center " 
            onClick={() => dispatch(toggleThemeColor())}>
        {
            {
                dark: <img className="theme-image dark" src="moon.png" alt="switch to light theme" />,
                light: <img className="theme-image light" src="sun.png" alt="switch to dark theme" />
            }[themeColor]
        }
        </div>
    );
}

export default ChangeThemeButton