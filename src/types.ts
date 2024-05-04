export type TypeNote = {
    id: string,
    title: string,
    description: string,
    expirationDate?: string,
}

export type TypeAuthenticationRequest = {
  email: string,
  password: string,
}

export type TypeThemeColor = "dark" | "light"
export type TypeStateStatus = "isLoading" | "error" | "succeeded"
export type TypeStateError = null | string