<template>
  <nav class="flex justify-between whitespace-nowrap">
    <h1 class="cursor-default text-md md:text-xl">SutHub - Front-end</h1>
    <ul class="flex">
      <li v-for="route in routes" :key="route.name">
        <router-link
          class="mx-2 md:mx-4"
          v-slot="{ href, navigate, isExactActive }"
          :to="{ name: route.name }"
        >
          <a
            :href="href"
            @click="navigate"
            :class="isExactActive ? 'text-green-600' : ''"
            >{{ route.label }}</a
          >
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation',

  data: () => ({
    routes: [
      {
        name: 'Home',
        label: 'Inico'
      },
      {
        name: 'Form',
        label: 'Fomulário'
      },
      {
        name: 'Countries',
        label: 'Países'
      }
    ]
  })
}
</script>
