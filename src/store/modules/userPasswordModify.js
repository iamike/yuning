import userApi from '../../api/user'
import * as types from '../mutation-types'

const state = {
  [types.USER_MODIFY_PASSWORD_INFO]: undefined,
  [types.USER_MODIFY_PASSWORD_ERRORS]: undefined,
  [types.USER_MODIFY_PASSWORD_STEP]: 0,

}

const actions = {
  [types.USER_MODIFY_PASSWORD_ACTION]({ commit }, data) {
    return new Promise((resolve,reject)=>{
      userApi.modifyPassword({ commit }, data, resolve, reject)
    })

  },
}

const mutations = {
  [types.USER_MODIFY_PASSWORD_SUCCESS](state, payload) {
    state[types.USER_MODIFY_PASSWORD_ERRORS] = payload
  },
  [types.USER_MODIFY_PASSWORD_FAILURE](state, payload) {
    state[types.USER_MODIFY_PASSWORD_ERRORS] = payload
  },
}
const getters = {
  [types.USER_MODIFY_PASSWORD_ERRORS]: state => state[types.USER_MODIFY_PASSWORD_ERRORS],
  [types.USER_MODIFY_PASSWORD_STEP]: state => state[types.USER_MODIFY_PASSWORD_STEP],
}
export default {
  state,
  actions,
  getters,
  mutations,
}
