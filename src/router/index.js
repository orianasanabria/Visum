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
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import( /* webpackChunkName: "checkout" */ '../views/Checkout.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import( /* webpackChunkName: "signin" */ '../views/SignIn.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import( /* webpackChunkName: "notfound" */ '../views/NotFound.vue')
  },
  {
    path: '/producto/:sku',
    name: 'Producto',
    component: () => import( /* webpackChunkName: "producto" */ '../views/Producto.vue')
  },
  {
    path: '/:id',
    name: 'Categoria',
    component: () => import( /* webpackChunkName: "categoria" */ '../views/Categoria.vue'),
    // children: [, ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router