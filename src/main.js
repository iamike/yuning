import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

//import components
import App from './App'
import Home from './components/Homepage'
import BookStore from './components/BookStore'

import '../static/semantic/dist/semantic'


const Bar = { template: '<div>This is Bar  {{ $route.params.id }}</div>' }

/* router */
Vue.use(VueRouter)

/* vuex */
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userPopup: false
  },
  mutations: {
    toggleUserPopup (state) {
      // console.log(state.userPopup)
      if (state.userPopup == true) {
        state.userPopup = false
        $('.ui.user.modal').modal('hide')
      } else {
        state.userPopup = true
        $('.ui.user.modal').modal('show')
      }

    }
  }
})
const router = new VueRouter({
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/bookstore', name: 'bookstore', component: BookStore },
    { path: '/bar/:id', name: 'bar', component: Bar }
  ]
})

/* appInstance */
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})

// /* sidebarInstance */
// const sidebarInstance = new Vue({
//   el: '#sidebar',
//   template: '<Sidebar/>',
//   components: { Sidebar }
// })
