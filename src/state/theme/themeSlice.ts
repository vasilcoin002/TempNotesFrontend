import {createSlice} from "@reduxjs/toolkit";

export type TypeThemeColorState = {
    themeColor: "dark" | "light" }

const initialState:TypeThemeColorState = {themeColor: "dark"};

const themeColorSlice = createSlice({
    name: "themeColor",
    initialState,
    reducers: {
        setTheme: (state:TypeThemeColorState) => {
            state.themeColor === "dark" ? state.themeColor = "light" : state.themeColor = "dark"
            console.log(state.themeColor)
        }
    }
})

export const setTheme = themeColorSlice.actions;
export default themeColorSlice.reducer;