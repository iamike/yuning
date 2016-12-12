import userApi from '../../api/user'
import * as types from '../mutation-types'

const state = {
  [types.USER_MODIFY_PASSWORD_INFO]: undefined,
  [types.USER_MODIFY_PASSWORD_ERRORS]: undefined,
}

const actions = {
  [types.USER_MODIFY_PASSWORD_ACTION]({ commit }, data) {
    userApi.modifyPassword({ commit }, data)
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
}
export default {
  state,
  actions,
  getters,
  mutations,
}
