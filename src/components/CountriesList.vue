<template>
  <div class="flex justify-center w-full mt-10">
    <transition-group name="fade" mode="out-in" appear>
      <div
        v-for="(country, index) in countriesList"
        :key="index"
        class="flex flex-col w-full text-xl font-light md:mt-1.5 mb-10"
      >
        <img
          :src="country.flag"
          alt="Country Flag"
          class="w-24 mx-auto mb-10"
        />

        <div class="grid grid-rows-1 text-center md:grid-cols-7">
          <div class="flex flex-col px-5 field">
            <h2 class="my-4 text-xl font-normal">País</h2>
            <span class="md:mt-1.5 text-sm tracking-wider">
              {{ country.translations.br }}
            </span>
          </div>

          <div class="flex flex-col px-5 field">
            <h2 class="my-4 text-xl font-normal">Código</h2>
            <span class="md:mt-1.5 text-sm tracking-wider">
              {{ country.cioc || '--' }}
            </span>
          </div>

          <div class="flex flex-col px-5 field">
            <h2 class="my-4 text-xl font-normal">Capital</h2>
            <span class="md:mt-1.5 text-sm tracking-wider">
              {{ country.capital || '--' }}
            </span>
          </div>

          <div class="flex flex-col px-5 field">
            <h2 class="my-4 text-xl font-normal">Idiomas</h2>
            <span
              class="py-0 my-0"
              v-for="(languages, index) in country.languages"
              :key="index"
            >
              <router-link
                class="text-sm tracking-wider text-green-600 underline transition cursor-pointer hover:text-green-700"
                :to="{ path: `/language/${languages.iso639_1}` }"
              >
                {{ languages.name || '--' }}
              </router-link>
            </span>
          </div>

          <div class="flex flex-col px-5 field">
            <h2 class="my-4 text-xl font-normal">Região</h2>
            <span class="md:mt-1.5 text-sm tracking-wider">
              {{ country.region || '--' }}
            </span>
          </div>

          <div class="flex flex-col px-5 field">
            <h2 class="my-4 text-xl font-normal">Lat/Lon</h2>
            <span class="md:mt-1.5 text-sm tracking-wider">
              {{ country.latlng[0] || '--' }} /
              {{ country.latlng[1] || '--' }}
            </span>
          </div>

          <div class="flex flex-col px-5 field">
            <h2 class="my-4 text-xl font-normal">Moedas</h2>
            <span
              class="md:mt-1.5 text-sm tracking-wider"
              v-for="currency in country.currencies"
              :key="currency.name"
            >
              {{ currency.name }} - {{ currency.symbol }}
            </span>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'CountriesList',

  props: {
    countriesList: {
      type: [Array, Object],
      required: true
    }
  }
}
</script>
