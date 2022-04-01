/**
 * It sets the user in the state to the user passed in.
 * @param state - The state object that you want to update.
 * @param user - The user object that is being logged in.
 */
export const login = (state, user) => {
  state.infos = user;
};

export const logout = (state) => {
  state.infos = null;
};

/* This is the default export of the file. It is the object that is returned when you import the file. */
export default function () {
  return {
    user: null,
  };
}
