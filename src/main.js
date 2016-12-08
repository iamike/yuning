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
  linkActiveClass: 'active',
  routes: [
    { path: '/home', name: 'home', component: Home },
    {
      path: '/user/:id',
      name: 'userDashboard',
      redirect: '/user/:id/profile',
      component: resolve => require(['./components/UserDashboard.vue'], resolve),
      children:[{
        path: 'profile',
        name: 'profile',
        redirect: '/user/:id/profile/info',
        components: {
          userNav: resolve => require(['./components/UserNav.vue'], resolve),
          userSection: resolve => require(['./components/UserDashboardProfile.vue'], resolve)
        },
        children:[{
          path: 'info',
          name: 'info',
          components: {
            userMain: resolve => require(['./components/UserInfo.vue'], resolve),
            userSidebar: resolve => require(['./components/UserSidebar.vue'], resolve),
          }
        },{
          path: 'modifyPassword',
          name: 'modifyPassword',
          components: {
            userMain: resolve => require(['./components/UserModifyPassword.vue'], resolve),
            userSidebar: resolve => require(['./components/UserSidebar.vue'], resolve),
          }
        }]
      },{
        path: 'account',
        name: 'account',
        components: {
          userNav: resolve => require(['./components/UserNav.vue'], resolve),
          userSection: resolve => require(['./components/UserDashboardAccount.vue'], resolve)
        }
      },{
        path: 'order',
        name: 'order',
        components: {
          userNav: resolve => require(['./components/UserNav.vue'], resolve),
          userSection: resolve => require(['./components/UserDashboardOrder.vue'], resolve)
        }
      }]

    },
    { path: '/bookstore', name: 'bookstore', component: resolve => require(['./components/BookStore.vue'], resolve)},
    // { path: '/', redirect: '/home' },
    // { path: '*', redirect: '/home' }

    // children: [{
    //     path: 'info',
    //     name: 'info',
    //     components: {
    //       userMain: resolve => require(['./components/UserInfo.vue'], resolve),
    //       userSidebar: resolve => require(['./components/UserSidebar.vue'], resolve),
    //     }
    // },{
    //     path: 'modifyPassword',
    //     name: 'modifyPassword',
    //     components: {
    //       userMain: resolve => require(['./components/UserModifyPassword.vue'], resolve),
    //       userSidebar: resolve => require(['./components/UserSidebar.vue'], resolve),
    //     }
    // }]
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
