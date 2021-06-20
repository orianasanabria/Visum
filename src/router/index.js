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
    path: '/carrito',
    name: 'Carrito',
    component: () => import( /* webpackChunkName: "carrito" */ '../views/Carrito.vue')
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: () => import( /* webpackChunkName: "favoritos" */ '../views/Favoritos.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import( /* webpackChunkName: "notfound" */ '../views/NotFound.vue')
  },
  {
    path: '/:id',
    name: 'Categoria',
    component: () => import( /* webpackChunkName: "categoria" */ '../views/Categoria.vue'),
  },
  {
    path: '/producto/:id',
    name: 'Producto',
    component: () => import( /* webpackChunkName: "producto" */ '../views/Producto.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router