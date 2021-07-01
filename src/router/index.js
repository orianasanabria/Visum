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
    meta: {
      requiresAuth: true
    },
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
    path: '/:id',
    name: 'Categoria',
    component: () => import( /* webpackChunkName: "categoria" */ '../views/Categoria.vue'),
  },
  {
    path: '/:id/:sku',
    name: 'Producto',
    component: () => import( /* webpackChunkName: "producto" */ '../views/Producto.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("login")
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/checkout')
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router