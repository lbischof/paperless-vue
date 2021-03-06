// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import Router from 'vue-router'

import router from './router'
import api from './api/api'
import store from './store'

Vue.use(Router)
Vue.use(Vuex)
Vue.use(VueAxios, api)
Vue.use(require('vue-moment'))
Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  api,
  store,
  components: { App },
  template: '<App/>'
})
