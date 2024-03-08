import {Button} from "@/components/ui/button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/state/store.ts";
import {setTheme, TypeThemeColorState} from "@/state/theme/themeSlice.ts";
import {TypeThemeColor} from "@/types.ts";


function ChangeThemeButton() {
    const themeColor: TypeThemeColor = useSelector((state: RootState) => state.theme.themeColor);
    const dispatch = useDispatch();
    return (
        <Button onClick={() => dispatch(setTheme.setTheme())}>Change the theme</Button>
    );
}

export default ChangeThemeButton