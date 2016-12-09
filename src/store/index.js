import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import userRegLog from './modules/userRegLog'

/* vuex */
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  getters,
  modules: {
    userRegLog
  }
})
