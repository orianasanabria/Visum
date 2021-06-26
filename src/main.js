import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import firebase from "firebase";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/style.scss'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = localStorage.getItem("login")
//   if (to.name !== 'Login' && !isAuthenticated) next({
//     name: 'Login'
//   })
//   else if (to.name === 'Login' && isAuthenticated) next({
//     name: 'Home'
//   })
//   else next()
// })

new Vue({
  router,
  store,
  firebase,
  render: h => h(App)
}).$mount('#app')