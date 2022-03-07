// src/store/showcase/mutations.js
export const add = (state, item) => {
  const carts = [];
  if (state.items.length !== 0) {
    const test = state.items.filter((article) => article.id === item.id);
    if (test.length !== 0) {
      for (let article of state.items) {
        if (article.id === item.id) {
          article.counter = article.counter + 1;
          carts.push(article);
        } else {
          carts.push(article);
        }
      }
      state.items = carts;
    } else {
      state.items.push(item);
    }
  } else {
    state.items.push(item);
  }
};

export const increment = (state, item) => {
  item.counter = item.counter + 1;
};

export const decrement = (state, item) => {
  item.counter = item.counter - 1;
  if (item.counter === 0) {
    item.counter = 1;
    state.items = state.items.filter((article) => article.id !== item.id);
  }
};

export const remove = (state, item) => {
  item.counter = 1;
  state.items = state.items.filter((article) => article.id !== item.id);
};

// src/store/showcase/state.js
// Always use a function to return state if you use SSR
export default function () {
  return {
    items: [],
  };
}
