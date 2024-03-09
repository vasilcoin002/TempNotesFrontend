import {Button} from "@/components/ui/button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/state/store.ts";
import {toggleThemeColor} from "@/state/theme/themeColorSlice";
import {TypeThemeColor} from "@/types.ts";


function ChangeThemeButton() {
    const themeColor: TypeThemeColor = useSelector((state: RootState) => state.theme.themeColor);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <Button className={themeColor} onClick={() => dispatch(toggleThemeColor())}>Change the theme</Button>
    );
}

export default ChangeThemeButton