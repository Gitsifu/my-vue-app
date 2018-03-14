// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import HTTP from "./lib/httpRequest";
import 'jquery'
import API from "./lib/api";
import ROLE_MAP from './lib/roleMap'

Vue.config.productionTip = false

Vue.prototype.$HTTP = HTTP;
Vue.prototype.$API = API;
Vue.prototype.$ROLE_MAP = ROLE_MAP;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
