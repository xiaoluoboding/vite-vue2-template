import Vue from 'vue'
import VueCompostionAPI from '@vue/composition-api'
import App from './App.vue'
import 'vue-global-api'

Vue.use(VueCompostionAPI)

const app = new Vue({
  render: h => h(App)
})

app.$mount('#app')