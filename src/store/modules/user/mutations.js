// src/store/showcase/mutations.js
export const login = (state, logged) => {
  state.logged = logged;
};

// src/store/showcase/state.js
// Always use a function to return state if you use SSR
export default function () {
  return {
    logged: false,
  };
}
