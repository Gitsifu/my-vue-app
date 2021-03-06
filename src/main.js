// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import HTTP from "./lib/httpRequest";
import 'jquery'
import API from "./lib/api";
import ROLE_MAP from './lib/roleMap'
import Cookies from 'js-cookie'
//引入mint-ui
import Mint from 'mint-ui';
//必须要引入下面这个，官网没有说，坑！！！
import 'mint-ui/lib/style.css';
//使用Mint-ui
Vue.use(Mint);

Vue.config.productionTip = false;

//配置全局的cookie
Vue.prototype.$Cookies = Cookies;

//配置全局的已封装的axios
Vue.prototype.$HTTP = HTTP;

//配置全局的接口url
Vue.prototype.$API = API;

//配置全局的角色映射
Vue.prototype.$ROLE_MAP = ROLE_MAP;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
