<template>
  <div>
    <transition-group name="fade" mode="out-in" appear>
      <div
        v-for="(country, index) in countriesList"
        :key="index"
        class="flex flex-col w-full text-xl font-light mt-14"
      >
        <img
          :src="country.flag"
          alt="Country Flag"
          class="w-24 mx-auto mb-10"
        />
        <table
          class="text-center bg-white shadow-lg cursor-default stripe hover"
        >
          <thead class="text-white bg-gray-400">
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
                    class="text-green-600 underline transition cursor-pointer hover:text-green-700"
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
