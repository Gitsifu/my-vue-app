'use strict'
import ROLE_MAP from '../lib/roleMap'
// import HelloWorld from '@/components/HelloWorld'

//路由配置，数据结构为数组
let ROUTERS = [
  {
    path: '/',
    name: 'HelloWorld',
    component: resolve => {
      require(['@/components/HelloWorld'], resolve)
    },
    meta: {
      //是否需要验证后才能访问
      auth: true,
      //角色'1'或者'2'才能访问此路由，如果不是，则无权访问
      role: [ROLE_MAP['1'], ROLE_MAP['2']]
    },
  },
  {
    path: '/hello',
    name: 'hello',
    component: resolve => {
      require(['@/components/Hello'], resolve)
    },
    meta: {
      auth: true,
      role: [ROLE_MAP['1'], ROLE_MAP['2']]
    }
  }
];

export default ROUTERS;
