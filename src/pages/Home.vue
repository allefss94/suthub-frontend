<template>
  <div class="flex w-full h-full px-5 pt-20 text-center md:text-left">
    <div class="flex flex-col">
      <h2 class="mb-4 text-5xl font-medium">Teste para Front-end</h2>
      <h1 class="font-bold tracking-widest text-7xl">SutHub</h1>
      <p class="w-full mt-4 lg:w-3/6">
        A plataforma Suthub capacita as seguradoras e assistências a acelerar
        sua distribuição de produtos de forma digital.
        <a
          class="text-green-600 underline"
          href="https://suthub.com/"
          target="_blank"
          >Clique aqui</a
        >
        e saiba mais.
      </p>

      <div
        class="grid w-full grid-cols-2 gap-5 my-10 whitespace-nowrap md:gap-10 lg:w-3/6 buttons"
      >
        <router-link
          tag="button"
          :to="{ name: 'Form' }"
          class="px-5 py-6 text-xl text-white transition bg-green-600 rounded md:px-10 hover:shadow-md hover:bg-green-700"
          >Cadastre-se</router-link
        >
        <router-link
          tag="button"
          :to="{ name: 'Countries' }"
          class="px-5 py-6 text-xl text-green-600 transition border border-green-600 rounded md:px-10 hover:shadow-md hover:bg-green-600 hover:text-white"
          >Países</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
