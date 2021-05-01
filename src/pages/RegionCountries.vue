<template>
  <div class="flex flex-col">
    <h1 class="my-10 text-3xl">Países da {{ this.$route.params.region }}</h1>
    <CountryInfo :countriesList="countries" />
  </div>
</template>

<script>
import CountryInfo from '@/components/CountryInfo'
import { mapGetters } from 'vuex'
export default {
  name: 'RegionCountries',

  components: { CountryInfo },

  data: () => ({
    countries: []
  }),

  computed: {
    ...mapGetters({ getCountryForRegion: 'getCountryForRegion' })
  },

  created() {
    this.$axios
      .get(
        `https://restcountries.eu/rest/v2/region/${this.$route.params.region}`
      )
      .then(response => (this.countries = response.data))
  }
}
</script>
