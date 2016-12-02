import Vue from 'vue'
import VueRouter from 'vue-router'

//import components
import App from './App'
import Sidebar from './components/Sidebar'
import Home from './components/Homepage'

import '../static/semantic/dist/semantic'


const Foo = { template: '<div>This issss Foo</div>' }
const Bar = { template: '<div>This is Bar  {{ $route.params.id }}</div>' }

/* router */
Vue.use(VueRouter)
const router = new VueRouter({
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/foo', name: 'foo', component: Foo },
    { path: '/bar/:id', name: 'bar', component: Bar }
  ]
})

/* appInstance */
const appInstance = new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})

/* sidebarInstance */
const sidebarInstance = new Vue({
  el: '#sidebar',
  template: '<Sidebar/>',
  components: { Sidebar }
})
