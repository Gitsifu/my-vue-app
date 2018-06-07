'use strict'
import ROLE_MAP from '../lib/roleMap'
// import HelloWorld from '@/components/HelloWorld'

//路由配置，数据结构为数组
const simplePage = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import('@/views/Hello'),
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
    component: () => import('@/views/Index')
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/ErrorPage403')
  }
];

const examplePage = [
  {
    path: '/example',
    name: 'example',
    component: () => import('@/views/example/example-container'),
    children: [
      {
        path: 'img-upload',
        name: 'img-upload',
        component: () => import('@/views/example/img-upload-example')
      },
      {
        path: 'vm-markdown',
        name: 'vm-markdown',
        component: () => import('@/views/example/vm-markdown-example')
      },
      {
        path: 'charts',
        name: 'charts',
        component: () => import('@/views/example/charts-example')
      }
    ]
  }
]

const ROUTERS = [
  ...simplePage,
  ...examplePage
]

export default ROUTERS;
