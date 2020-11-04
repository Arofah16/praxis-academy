import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/Contact',
  //   name:'contact',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/contact.vue')
  // }
  {
    path: '/adress',
    name: 'Adress',
    component: () => import('../views/adress.vue'),
    children: [
      {
        path: 'alamat1',
        name: 'alamat1',
        component: () => import(/* webpackChunkName: "alamat1" */ '@/adress/alamat1.vue')
      },
      {
        path: 'alamat2',
        name: 'alamat2',
        component: () => import(/* webpackChunkName: "alamat2" */ '../adress/alamat2.vue')
      },
    ]
  },
  // {
  //   path:'/:name',
  //   name:'id',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/paramrouter.vue')

  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
