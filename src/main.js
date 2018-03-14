// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import HTTP from "./lib/httpRequest";
import 'jquery'
import API from "./lib/api";

Vue.config.productionTip = false

Vue.prototype.$HTTP = HTTP;
Vue.prototype.$API = API

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
