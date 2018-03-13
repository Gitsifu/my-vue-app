import Vue from 'vue'
import Router from 'vue-router'
import ROUTERS from './router'

Vue.use(Router)

/**
 * 路由配置
 *
 * @type {VueRouter}
 */
let router = new Router({
  /**
   * HTML5 History 模式
   */
  // mode: 'history',

  /**
   * 将配置好的路由添加到路由里
   */
  routes: ROUTERS
})

/**
 * 路由前置钩子
 */
router.beforeEach((to, from, next) => {
  //如果此路由需要验证
  if (to.meta.auth) {
    //如果当前角色有权限（权限信息加密后保存在session中，所以获取权限在sessionStorage中取）
    if (to.meta.role.indexOf(sessionStorage.role) >= 0) {
      next()
    } else {
      //无权限跳转路由到'/403'
      next('/403');
    }
  } else {
    next();
  }
})

export default router;
