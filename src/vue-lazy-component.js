/**
  * vue-lazy-component
  * (c) 2017 赵兵
  * @license MIT
  */
const VueLazyComponent = require('./VueLazyComponent.vue')
const vueLazyComponent = {}

/**
 * Plugin API
 */
vueLazyComponent.install = function (Vue, options) {
  Vue.component(VueLazyComponent.name, VueLazyComponent)
}

vueLazyComponent.component = VueLazyComponent

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueLazyComponent)
}

module.exports = vueLazyComponent
