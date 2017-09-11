// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

const vueContextMenu = process.env.NODE_ENV === 'development'
  ? require('../src/vue-lazy-component.js')
  : require('../dist/vue-lazy-component.js')

Vue.config.productionTip = false

// Using plugin
Vue.use(vueContextMenu)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
