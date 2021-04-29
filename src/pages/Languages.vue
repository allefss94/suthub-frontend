<template>
  <div class="flex flex-col">
    <h1 class="text-3xl my-10">Países com o mesmo Idioma</h1>
    <CountryInfo :countriesList="countries" />
  </div>
</template>

<script>
import CountryInfo from '@/components/CountryInfo'
import axios from 'axios'
export default {
  name: 'RegionCountries',

  components: { CountryInfo },

  data: () => ({
    countries: []
  }),

  created() {
    axios
      .get(`https://restcountries.eu/rest/v2/lang/${this.$route.params.name}`)
      .then(response => (this.countries = response.data))
  }
}
</script>
