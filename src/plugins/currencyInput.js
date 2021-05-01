import Vue from 'vue'
import VueCurrencyInput from 'vue-currency-input'

const pluginOptions = {
  globalOptions: {
    currency: 'BRL',
    locale: 'bt-BR'
  },
  componentName: 'CurrencyInput'
}
Vue.use(VueCurrencyInput, pluginOptions)
