import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import '@/plugins/axios'
import '@/plugins/currencyInput'
import 'tailwindcss/tailwind.css'
import '@/assets/style/index.css'

Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
