Clean dist for creating 2 different bundles with some common components (for example for creating user interface and admin interface) and absolutely separate stores, routes etc.
every project is compiled through env.js

it also contain preload svg images (@/assets/svg), so svg image could be loaded in a component without importing image there, just by writing the code in template:
<svg height="20" width="30" class="pr-2">
  <use xlink:href="#about"></use>
</svg >

Webpack 4
Vue 2.6
Vuetify 2
Vue-router
Vuex
i18n
svg-sprite
