import Vue from 'vue'
import { router, store, routeNames } from '@/env';
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify';
import { i18n } from '@/plugins/i18n';
import { svgImages } from '@/plugins/svg'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  store,
  vuetify,
  i18n,
  svgImages,
  render: h => h(App)
})
