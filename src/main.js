import Vue from 'vue'
import VueRouter from 'vue-router'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueRouter)
Vue.use(VueLocalStorage)

//import components
import App from './App'
import Home from './components/Homepage'
import BookStore from './components/BookStore'

//import store
import store from './store'

//import semantic ui js
import '../static/semantic/dist/semantic'

const router = new VueRouter({
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: Home },
    {
      path: '/user/:id(\\d+)',
      // path: '/UserInfoLanding/:id(\\d+)',
      name: 'userInfoLanding',
      component: resolve => require(['./components/UserInfoLanding.vue'], resolve)
    },
    { path: '/bookstore', name: 'bookstore', component: resolve => require(['./components/UserInfoLanding.vue'], resolve)},
    { path: '*', redirect: '/' }
  ]
})


const localStorage = {
  access_token: {
    type: String
  },
  user_info: {
    type: Object
  }
}
/* appInstance */
new Vue({
  localStorage,
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
