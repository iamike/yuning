import userApi from '../../api/user'
import * as types from '../mutation-types'

const state = {
  [types.USER_MODIFY_AVATAR_ERRORS]: undefined,
}

const actions = {
  [types.USER_MODIFY_AVATAR_ACTION]({ commit }, data) {
    return new Promise((resolve,reject)=>{
      userApi.modifyAvatar({ commit }, data, resolve, reject)
    })
  },
}

const mutations = {
  [types.USER_MODIFY_AVATAR_SUCCESS](state, payload) {
    state[types.USER_MODIFY_AVATAR_ERRORS] = payload
  },
  [types.USER_MODIFY_AVATAR_FAILURE](state, payload) {
    state[types.USER_MODIFY_AVATAR_ERRORS] = payload
  },
}

const getters = {
  [types.USER_MODIFY_AVATAR_ERRORS]: state => state[types.USER_MODIFY_AVATAR_ERRORS],
}

export default {
  state,
  getters,
  actions,
  mutations
}
