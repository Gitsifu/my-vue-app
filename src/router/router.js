'use strict'
import ROLE_MAP from '../lib/roleMap'
// import HelloWorld from '@/components/HelloWorld'

//路由配置，数据结构为数组
let ROUTERS = [
  {
    path: '/',
    name: 'login',
    component: resolve => {
      require(['@/views/Login'], resolve)
    }
  },
  {
    path: '/hello',
    name: 'hello',
    component: resolve => {
      require(['@/views/Hello'], resolve)
    },
    meta: {
      //是否需要验证后才能访问
      auth: true,
      //角色'1'才能访问此路由，如果不是，则无权访问
      role: [ROLE_MAP['1']]
    },
  },
  {
    path: '/index',
    name: 'index',
    component: resolve => {
      require(['@/views/Index'], resolve)
    }
  },
  {
    path: '/403',
    name: '403',
    component: resolve => {
      require(['@/views/ErrorPage403'], resolve)
    },
  }
];

export default ROUTERS;
