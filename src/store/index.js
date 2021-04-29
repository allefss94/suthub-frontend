import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    countries: []
  }),
  getters: {
    getCountries: state => state.countries,

    getCountry: state => countryName =>
      state.countries.filter(country => country.translations.br === countryName),

    getCountryForRegion: state => region =>
      state.countries.filter(country => country.region == region)
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
