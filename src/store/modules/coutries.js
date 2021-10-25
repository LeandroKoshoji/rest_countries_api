export default {
  state: {
    countries: [],
    country: [],
    error: null,
    errorMessage: null,
    loading: null,
    query: "",
    filter: "",
  },
  getters: {
    filteredCountries(state) {
      const allCountries = state.countries;
      const query = state.query.toLowerCase().trim();
      const filter = state.filter.toLowerCase().trim();

      if (filter && query) {
        const filteredCountries = allCountries.filter((country) =>
          country.region.toLowerCase().match(filter)
        );

        return filteredCountries.filter((fc) =>
          fc.name.toLowerCase().includes(query)
        );
      }
      if (query) {
        return allCountries.filter((country) =>
          country.name.toLowerCase().includes(query)
        );
      }
      if (filter) {
        const filteredCountries = allCountries.filter((country) =>
          country.region.toLowerCase().match(filter)
        );

        return filteredCountries;
      }

      return allCountries;
    },
    country(state) {
      return state.country;
    },
    loading(state) {
      return state.loading;
    },
  },
  mutations: {
    SET_QUERY(state, payload) {
      state.query = payload;
    },
    SET_FILTER(state, payload) {
      state.filter = payload;
    },
    GET_COUNTRIES(state, payload) {
      state.countries = payload;
    },
    GET_COUNTRY(state, payload) {
      state.country = payload;
    },
    GET_ERROR(state, payload) {
      state.error = payload;
    },
    GET_ERROR_MESSAGE(state, payload) {
      state.errorMessage = payload;
    },
    GET_LOADING(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async FETCH_COUNTRIES({ commit }) {
      try {
        commit("GET_LOADING", true);
        const res = await fetch(`https://restcountries.com/v2/all`);
        const data = await res.json();

        commit("GET_COUNTRIES", data);
      } catch (e) {
        commit("GET_ERROR", true);
        commit("GET_ERROR_MESSAGE", e.message);
      } finally {
        commit("GET_LOADING", false);
      }
    },
    async FETCH_COUNTRY_BY_NAME({ commit }, code) {
      try {
        commit("GET_LOADING", true);
        const res = await fetch(`https://restcountries.com/v2/alpha/${code}`);
        const data = await res.json();

        commit("GET_COUNTRY", data);
      } catch (e) {
        commit("GET_ERROR", true);
        commit("GET_ERROR_MESSAGE", e.message);
      } finally {
        commit("GET_LOADING", false);
      }
    },
  },
};
