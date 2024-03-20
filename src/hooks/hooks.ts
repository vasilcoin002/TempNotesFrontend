import { fetchUserNotes } from "@/state/notes/notesSlice";
import { AppDispatch, RootState } from "@/state/store";
import { TypeNote, TypeNotesStateError, TypeNotesStateStatus } from "@/types";
import { useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> =  useSelector

export const useThemeColor = () => useAppSelector(state => state.theme.themeColor)

type TypeUseUserNotes = () => {
  notes: TypeNote[], 
  status: TypeNotesStateStatus, 
  error: TypeNotesStateError
}
export const useUserNotes: TypeUseUserNotes = () => {
  const notes: TypeNote[] | undefined = useAppSelector(state => state.notes.notes)
  const status: TypeNotesStateStatus = useAppSelector(state => state.notes.status)
  const error: TypeNotesStateError = useAppSelector(state => state.notes.error)
  return {notes, status, error}
}

export const useUserFetchedNotes: TypeUseUserNotes = () => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchUserNotes())
  }, [dispatch])
  const {notes, status, error} = useUserNotes()
  return {notes, status, error}
}