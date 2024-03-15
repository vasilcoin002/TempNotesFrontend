import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "./theme/themeColorSlice.ts"
import notesReducer from "./notes/notesSlice.ts"


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        notes: notesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;