import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import common from './modules/common'
import userRegLog from './modules/userRegLog'
import userInfoModify from './modules/userInfoModify'
import userAvatarModify from './modules/userAvatarModify'
import userPasswordModify from './modules/userPasswordModify'
import baby from './modules/baby'

/* vuex */
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    common,
    userRegLog,
    userInfoModify,
    userPasswordModify,
    userAvatarModify,
    baby,
  }
})
