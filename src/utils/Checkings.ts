export const getCheckingOfNoteArgs = (
  title: string,
  description: string,
  isExpirationDateDisabled: boolean,
  expirationDate?: Date
) => {
  const state: { correct: boolean; error: string | null } = {
    correct: true,
    error: null,
  };
  const now = Date.now();
  if (title === "" && description === "") {
    state.error = "Title or description must be given";
    state.correct = false;
    return state;
  } else if (
    isExpirationDateDisabled === false &&
    expirationDate === undefined
  ) {
    state.error = "Please, select the date or disable it";
    state.correct = false;
    return state;
  } else if (
    isExpirationDateDisabled === false &&
    expirationDate &&
    expirationDate.getTime() <= now
  ) {
    state.error = "Please, select the day which is after today";
    state.correct = false;
    return state;
  }
  return state;
}