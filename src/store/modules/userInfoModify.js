import userApi from '../../api/user'
import * as types from '../mutation-types'

const state = {
  [types.USER_MODIFY_INFO_ERRORS]: undefined,
}

const actions = {
  [types.USER_MODIFY_INFO_ACTION]({ commit }, data) {
    return new Promise((resolve,reject)=>{
      userApi.modifyInfo({ commit }, data, resolve, reject)
    })
  },
}

const mutations = {
  [types.USER_MODIFY_INFO_SUCCESS](state, payload) {
    state[types.USER_MODIFY_INFO_ERRORS] = payload
    // console.log('successful, data updated', payload)
  },
  [types.USER_MODIFY_INFO_FAILURE](state, payload) {
    state[types.USER_MODIFY_INFO_ERRORS] = payload
    // console.log('failure, data has not updated', payload)
  },
}

const getters = {
  [types.USER_MODIFY_INFO_ERRORS]: state => state[types.USER_MODIFY_INFO_ERRORS],
}

export default {
  state,
  getters,
  actions,
  mutations
}
