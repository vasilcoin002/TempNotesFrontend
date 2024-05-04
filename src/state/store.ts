import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "./theme/themeColorSlice.ts"
import notesReducer from "./notes/notesSlice.ts"
import authenticationReducer from "./authentication/authenticationSlice.ts"


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    notes: notesReducer,
    authentication: authenticationReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;