<template>
  <div class="flex flex-col items-center">
    <h1 class="my-10 text-3xl">Países da {{ this.$route.params.region }}</h1>
    <div
      class="grid items-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
    >
      <div v-for="country in countries" :key="country.name">
        <h3>{{ country.translations.br }}</h3>
        <img class="w-48" :src="country.flag" :alt="country.name" />
        <p>Lat: {{ country.latlng[0] }} / Lng:{{ country.latlng[1] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegionCountries',

  data: () => ({
    countries: []
  }),

  created() {
    this.$axios
      .get(
        `https://restcountries.eu/rest/v2/region/${this.$route.params.region}`
      )
      .then(response => (this.countries = response.data))
  }
}
</script>
