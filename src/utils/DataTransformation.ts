export const getStringOrUndefinedFromExpirationDate = (date: Date | undefined) => {
  return date ? date.getFullYear() + "-" + (String(date.getMonth() + 1).padStart(2, "0")) + "-" + String(date.getDate()).padStart(2, "0") : undefined
}

export const getFormattedExpirationStringOrUndefined = (date: string | undefined) => {
  const expirationDateOrUndefined = getExpirationDateOrUndefinedFromString(date)
  return expirationDateOrUndefined ? getStringOrUndefinedFromExpirationDate(expirationDateOrUndefined) : undefined
}

export const getExpirationDateOrUndefinedFromString = (expirationDate: string | undefined) => {
  return expirationDate ? new Date(expirationDate) : undefined
}