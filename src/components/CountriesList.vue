<template>
  <div>
    <transition-group name="fade" mode="out-in" appear>
      <div
        v-for="(country, index) in countriesList"
        :key="index"
        class="flex flex-col w-full mt-14 text-xl font-light"
      >
        <img
          :src="country.flag"
          alt="Country Flag"
          class="w-24 mx-auto mb-10"
        />
        <table
          class="stripe hover text-center cursor-default bg-white shadow-lg"
        >
          <thead class="bg-gray-400 text-white">
            <tr>
              <th>País</th>
              <th v-if="country.cioc">Código</th>
              <th v-if="country.capital">Capital</th>
              <th>Idioma</th>
              <th v-if="country.region">Região</th>
              <th>População</th>
              <th>Latitute / Logitude</th>
              <th>Moeda</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="px-3">{{ country.translations.br }}</td>
              <td v-if="country.cioc" class="px-3">{{ country.cioc }}</td>
              <td v-if="country.capital" class="px-3">{{ country.capital }}</td>
              <td class="px-3">
                <p v-for="(languages, index) in country.languages" :key="index">
                  <router-link
                    class="underline text-green-600 hover:text-green-700 transition cursor-pointer"
                    :to="{ path: `/language/${languages.iso639_1}` }"
                  >
                    {{ languages.name }}
                  </router-link>
                </p>
              </td>
              <td v-if="country.region" class="px-3">{{ country.region }}</td>
              <td class="px-3">{{ country.population }}</td>
              <td class="px-3">
                {{ country.latlng[0] }} /
                {{ country.latlng[1] }}
              </td>
              <td class="px-3">
                <p v-for="currency in country.currencies" :key="currency.name">
                  {{ currency.name }} -
                  {{ currency.symbol }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
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
