import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import level2 from '../components/level2/level2.vue'
import Elemnt from '../views/Elemnt.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
    {
      path:'about',
      component:()=>import('@/views/About')
    },
    {
      path:'zi',
      component:()=>import('@/views/zi')
    },
    {
      path:'deng',
      component:()=>import('@/views/deng')
    },
    {
      path:'info',
      component:()=>import('@/components/level2/messageCenter')
    },
    {
      path:'zong',
      component:()=>import('@/views/zong')
    },
    {
      path:'ke',
      component:()=>import('@/views/ke')
    },
    {
      path:'liu',
      component:()=>import('@/views/liu')
    },
    {
      path:'ji',
      component:()=>import('@/views/ji')
    },
	{
	  path:'li',
	  component:()=>import('@/views/li')
	},
  {
    path:'kehu',
    component:()=>import('@/views/kehu')
  },
  {
    path:'klist',
    component:()=>import('@/views/klist')
  },
  {
    path:'xiao',
    component:()=>import('@/views/xiao')
  },
  {
    path:'tell',
    component:()=>import('@/views/tell')
  },
  {
    path:'zhi',
    component:()=>import('@/views/zhi')
  },
  {
    path:'fabu',
    component:()=>import('@/views/fabu')
  },
  {
    path:'fenlei',
    component:()=>import('@/views/fenlei')
  },
  {
    path:'jue',
    component:()=>import('@/views/jue')
  },
  {
    path:'cheng',
    component:()=>import('@/views/cheng')
  },
  {
    path:'jshuo',
    component:()=>import('@/views/jshuo')
  },
  {
    path:'cao',
    component:()=>import('@/views/cao')
  },
  {
    path:'kuai',
    component:()=>import('@/views/kuai')
  },
  {
    path:'zhan',
    component:()=>import('@/views/zhan')
  },
  {
    path:'jixiao',
    component:()=>import('@/views/jixiao')
  },
  {
    path:'hhh',
    component:()=>import('@/views/hhh')
  },
  {
    path: '/fu',
    component: () => import('@/views/fu.vue')
  },
  {
    path: '/jk',
    component: () => import('@/views/jk.vue')
  },
  {
    path: '/th',
    component: () => import('@/views/th.vue')
  },
  {
    path: '/zhuanhuan',
    component: () => import('@/views/zhuanhuan.vue')
  },
  {
    path: '/jishi',
    component: () => import('@/views/jishi.vue')
  },
  {
    path: '/shijian',
    component: () => import('@/views/shijian.vue')
  },

    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/login')
  },
  {
    path: '/ca',
    component: () => import('@/views/ca.vue')
  },
  {
    path:"/Elemnt",
    name:"Elemnt",
    component:Elemnt
  }
]

const router = new VueRouter({
  mode:"history",

  routes
})

export default router
