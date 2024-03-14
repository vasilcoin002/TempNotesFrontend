import {Button} from "@/components/ui/button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/state/store.ts";
import {toggleThemeColor} from "@/state/theme/themeColorSlice";
import {TypeThemeColor} from "@/types.ts";


function ChangeThemeButton() {
    const themeColor: TypeThemeColor = useSelector((state: RootState) => state.theme.themeColor);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className="cursor-pointer" onClick={() => dispatch(toggleThemeColor())}>
        {
            {
                dark: <img className="theme-image" src="moon.png" alt="switch to light theme" />,
                light: <img className="theme-image" src="sun.png" alt="switch to dark theme" />
            }[themeColor]
        }
        </div>
    );
}

export default ChangeThemeButton