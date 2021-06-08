import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categoria',
    name: 'Categoria',
    component: () => import( /* webpackChunkName: "categoria" */ '../views/Categoria.vue')
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: () => import( /* webpackChunkName: "carrito" */ '../views/Carrito.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router