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
        }],
      },{
        path: 'account',
        name: 'account',
        redirect: '/user/:id/account/info',
        components: {
          userSection: resolve => require(['./components/AccountDashboard.vue'], resolve)
        },
        children:[{
          path: 'info',
          name: 'accountInfo',
          components: {
            userMain: resolve => require(['./components/AccountInfo.vue'], resolve),
          },
        },{
          path: 'charge',
          name: 'charge',
          components: {
            userMain: resolve => require(['./components/AccountCharge.vue'], resolve),
          },
        },{
          path: 'myCards',
          name: 'myCards',
          components: {
            userMain: resolve => require(['./components/AccountCards.vue'], resolve),
          },
        },{
          path: 'consultRecorder',
          name: 'consultRecorder',
          components: {
            userMain: resolve => require(['./components/AccountConsultList.vue'], resolve),
          },
        },{
          path: 'trainingRecorder',
          name: 'trainingRecorder',
          components: {
            userMain: resolve => require(['./components/AccountTrainingList.vue'], resolve),
          },
        }],
      },{
        path: 'order',
        name: 'order',
        components: {
          userSection: resolve => require(['./components/UserDashboardOrder.vue'], resolve)
        },
      }],
    },
    {
      path: '/needAsk',
      name: 'needAsk',
      component: resolve => require(['./components/MainContent.vue'], resolve),
      children: [{
        path: 'multiIntelligence',
        name: 'multiIntelligence',
        component: resolve => require(['./components/MultiIntelligence.vue'], resolve),
      },{
        path: 'multiIntelligenceRoom',
        name: 'multiIntelligenceRoom',
        component: resolve => require(['./components/MultiIntelligenceRoom.vue'], resolve),
      }],
    },
    { path: '/', redirect: '/home' },
    { path: '*', redirect: '/home' }
  ]
})

Vue.filter('capitalize', function (value) {
  // 返回处理后的值
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
})

/* appInstance */
new Vue({
  router,
  store,

  el: '#app',
  template: '<App/>',
  components: { App }
})
