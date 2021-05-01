<template>
  <div class="flex flex-col">
    <h1 class="my-10 text-3xl">Países com o mesmo Idioma</h1>
    <CountryInfo :countriesList="countries" />
  </div>
</template>

<script>
import CountryInfo from '@/components/CountryInfo'
export default {
  name: 'RegionCountries',

  components: { CountryInfo },

  data: () => ({
    countries: []
  }),

  created() {
    this.$axios
      .get(`https://restcountries.eu/rest/v2/lang/${this.$route.params.name}`)
      .then(response => (this.countries = response.data))
  }
}
</script>
