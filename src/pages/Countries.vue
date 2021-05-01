<template>
  <div class="flex flex-col items-center">
    <input
      type="text"
      class="w-10/12 px-5 py-3 mt-10 text-gray-400 rounded-md shadow-md md:w-6/12 focus:outline-none"
      placeholder="Buscar País (Lembre-se da acentuação se houver)"
      v-model="searchCountry"
    />

    <CountriesList :countriesList="countries" />

    <div class="w-full h-1 my-5 border-2 border-gray-300 divider"></div>

    <div class="flex flex-col text-center">
      <h2 class="text-3xl">Busque por Região</h2>

      <div
        class="grid grid-cols-1 gap-10 mt-10 buttons md:grid-cols-2 lg:grid-cols-5"
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
          country.translations.br
            .toLowerCase()
            .includes(this.searchCountry.toLowerCase())
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
