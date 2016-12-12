import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueRouter)
Vue.use(VueResource)

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
          userSection: resolve => require(['./components/UserDashboardProfile.vue'], resolve)
        },
        children:[{
          path: 'info',
          name: 'info',
          components: {
            userMain: resolve => require(['./components/UserInfoModify.vue'], resolve),
          }
        },{
          path: 'modifyPassword',
          name: 'modifyPassword',
          components: {
            userMain: resolve => require(['./components/UserModifyPassword.vue'], resolve),
          }
        },{
          path: 'babyInfo',
          name: 'babyInfo',
          components: {
            userMain: resolve => require(['./components/UserBabyInfo.vue'], resolve),
          }
        }]
      },{
        path: 'account',
        name: 'account',
        components: {
          userSection: resolve => require(['./components/UserDashboardAccount.vue'], resolve)
        }
      },{
        path: 'order',
        name: 'order',
        components: {
          userSection: resolve => require(['./components/UserDashboardOrder.vue'], resolve)
        }
      }]

    },
    { path: '/bookstore', name: 'bookstore', component: resolve => require(['./components/BookStore.vue'], resolve)},
    { path: '/', redirect: '/home' },
    { path: '*', redirect: '/home' }
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
