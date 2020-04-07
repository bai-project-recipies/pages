import Vue from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './Vuetify'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
