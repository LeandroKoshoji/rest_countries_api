import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    error: null,
    errorMessage: null,
    loading: null
  },
  mutations: {
    GET_COUNTRIES (state, payload) {
      state.countries = payload
    },
    GET_ERROR (state, payload) {
      state.error = payload
    },
    GET_ERROR_MESSAGE (state, payload) {
      state.errorMessage = payload
    },
    GET_LOADING (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    async FETCH_COUNTRIES ({commit}) {
      try {
        commit('GET_LOADING', true)
        const res = await fetch(`https://restcountries.com/v2/all`)
        const data = await res.json()

        console.log(data)
        commit('GET_COUNTRIES', data)
      } catch (e){
        commit('GET_ERROR', true)
        commit('GET_ERROR_MESSAGE', e.message)
      } finally {
        commit('GET_LOADING', false)
      }
    }
  },
  modules: {
  }
})
