export default {
  state: {
    theme: null,
  },
  mutations: {
    SET_THEME(state, payload) {
      state.theme = payload;
    },
  },
  getters: {
    theme(state) {
      return state.theme;
    },
  },
  actions: {
    TOGGLE_THEME({ commit, state }) {
      const theme = state.theme === "light" ? "dark" : "light";
      console.log(theme);
      commit("SET_THEME", theme);

      localStorage.setItem("theme", theme);
    },
    SET_INITIAL_THEME({ commit }) {
      const hasThemeStorage = Boolean(localStorage.getItem("theme"));
      const initialTheme = hasThemeStorage
        ? localStorage.getItem("theme")
        : "light";
      commit("SET_THEME", initialTheme);
    },
  },
};
