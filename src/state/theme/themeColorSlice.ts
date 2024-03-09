import { TypeThemeColor } from "@/types";
import {createSlice} from "@reduxjs/toolkit";

export type TypeThemeColorState = {
    themeColor: TypeThemeColor }

type TypeSetThemeColor = (state: TypeThemeColorState, color: TypeThemeColor) => void

const initialState:TypeThemeColorState = {themeColor: (localStorage.getItem("themeColor") as TypeThemeColor) || "dark"};

const setThemeColor:TypeSetThemeColor = (state, color) => {
    state.themeColor = color
    localStorage.setItem("themeColor", color)
}

const themeColorSlice = createSlice({
    name: "themeColor",
    initialState,
    reducers: {
        toggleThemeColor: (state:TypeThemeColorState) => {
            state.themeColor === "dark" ? setThemeColor(state, "light") : setThemeColor(state, "dark")
            console.log(state.themeColor)
        }
    }, 
})

export const {toggleThemeColor} = themeColorSlice.actions;
export default themeColorSlice.reducer;