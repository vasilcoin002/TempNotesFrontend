export type TypeNote = {
    id: string,
    title: string,
    description: string,
    expiresAt: string,
}

export type TypeThemeColor = "dark" | "light"
export type TypeNotesStateLoading = "isLoading" | "error" | "succeeded"
export type TypeNotesStateError = null | string