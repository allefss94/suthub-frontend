import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    countries: []
  }),
  getters: {
    getCountries: state => state.countries
  },
  mutations: {
    CACHE_COUNTRIES(state, data) {
      state.countries = data
    }
  },
  actions: {
    fetchCountries({ commit }) {
      return axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(({ data }) => commit('CACHE_COUNTRIES', data))
    }
  }
})
