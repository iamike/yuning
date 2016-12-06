import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import userRegLog from './modules/userRegLog'

/* vuex */
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userRegLog
  }
})
