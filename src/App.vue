<template>
  <div
    class="flex items-center justify-center py-20 w-screen h-full min-h-screen bg-gray-400"
  >
    <div
      class="flex flex-col w-full h-full min-height px-5 py-5 bg-gray-200 shadow-lg md:px-10 lg:w-10/12 lg:h-5/6 rounded-xl"
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
