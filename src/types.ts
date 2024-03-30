export type TypeNote = {
    id: string,
    title: string,
    description: string,
    expirationDate?: string,
}

export type TypeThemeColor = "dark" | "light"
export type TypeNotesStateStatus = "isLoading" | "error" | "succeeded"
export type TypeNotesStateError = null | string