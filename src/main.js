import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import eventBus from './plugins/event-bus'

Vue.use(eventBus)

new Vue({
  el: '#app',
  render: h => h(App)
})
