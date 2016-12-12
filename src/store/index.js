import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import userRegLog from './modules/userRegLog'
import userInfoModify from './modules/userInfoModify'
import userPasswordModify from './modules/userPasswordModify'
import baby from './modules/baby'

// console.log(userRegLog)
// console.log(userInfoModify)

/* vuex */
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  getters,
  modules: {
    userRegLog,
    userInfoModify,
    userPasswordModify,
    baby,
  }
})
