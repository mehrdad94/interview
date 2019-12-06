import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'

// base components
import BaseRectangle from '@/components/BaseRectangle'
import BaseTriangle from '@/components/BaseTriangle'
import BaseSquare from '@/components/BaseSquare'
import BaseCircle from '@/components/BaseCircle'

// base components
Vue.component('BaseRectangle', BaseRectangle)
Vue.component('BaseTriangle', BaseTriangle)
Vue.component('BaseSquare', BaseSquare)
Vue.component('BaseCircle', BaseCircle)

// vue configs
Vue.config.productionTip = false
Vue.config.errorHandler = function (err, vm, info) {
  // report errors to an analytics service
  console.error(err, vm, info)
}
Vue.config.warnHandler = function (msg, vm, trace) {
  // report warns to an analytics service
  console.warn(msg, vm, trace)
}
// show performance issues in development mode
Vue.performance = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
