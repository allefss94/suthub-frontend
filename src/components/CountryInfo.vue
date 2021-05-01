<template>
  <div
    class="grid items-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
  >
    <div v-for="country in countriesList" :key="country.name">
      <h3>{{ country.translations.br }}</h3>
      <img class="w-48" :src="country.flag" :alt="country.name" />
      <p>
        Lat: {{ country.latlng[0] | toFixed }} / Lng:{{
          country.latlng[1] | toFixed
        }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryInfo',

  props: {
    countriesList: {
      type: [Array, Object],
      required: true
    }
  },

  filters: {
    toFixed(value) {
      return value.toFixed(2)
    }
  }
}
</script>
