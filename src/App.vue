<template>
  <div
    class="flex items-center justify-center w-screen h-screen overflow-hidden bg-gray-400"
  >
    <div
      class="flex flex-col w-full h-full px-5 py-5 bg-gray-200 shadow-lg md:px-10 lg:w-10/12 rounded-xl lg:h-5/6"
    >
      <AppNavigation />

      <transition name="fade" mode="out-in" appear>
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation'
export default {
  name: 'SutHub-Front-end',

  components: { AppNavigation }
}
</script>
