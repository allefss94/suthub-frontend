<template>
  <div class="flex flex-col items-center">
    <input
      type="text"
      class="mt-10 w-6/12 px-5 py-3 rounded-md shadow-md focus:outline-none text-gray-400"
      placeholder="Buscar País (Primeira letra Maiúscula)"
      v-model="searchCountry"
    />

    <CountriesList :countriesList="countries" />

    <div class="divider h-1 w-full border-2 border-gray-300 my-5"></div>

    <div class="flex flex-col text-center">
      <h2 class="text-3xl">Busque por Região</h2>

      <div
        class="buttons grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mt-10"
      >
        <router-link
          v-for="region in regionList"
          :key="region"
          tag="button"
          :to="{ path: `/regiao/${region}` }"
          class="px-5 py-6 text-xl text-white transition bg-green-600 rounded md:px-10 hover:shadow-md hover:bg-green-700"
          >{{ region }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import CountriesList from '@/components/CountriesList'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Countries',

  components: { CountriesList },

  data: () => ({
    allCountries: [],
    searchCountry: '',
    regionList: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  }),
  computed: {
    ...mapGetters({ getCountries: 'getCountries' }),

    countries() {
      let filteredCountry
      if (this.searchCountry === '') {
        filteredCountry = this.allCountries.filter(
          country => country.nativeName === 'Brasil'
        )
      } else {
        filteredCountry = this.allCountries.filter(country =>
          country.translations.br.includes(this.searchCountry)
        )
      }
      return filteredCountry
    }
  },

  methods: {
    ...mapActions({ fetchCountries: 'fetchCountries' })
  },

  async created() {
    await this.fetchCountries()
    const countries = this.getCountries
    this.allCountries = countries
  }
}
</script>
