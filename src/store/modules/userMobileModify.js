import userApi from '../../api/user'
import * as types from '../mutation-types'

const state = {
  [types.USER_MODIFY_PHONE_ERRORS]: undefined,
}

const actions = {
  [types.USER_MODIFY_PHONE_ACTION]({ commit }, data) {
    console.log('action fired')
    return new Promise((resolve,reject)=>{
      userApi.modifyMobile({ commit }, data, resolve, reject)
    })
  },
}

const mutations = {
  [types.USER_MODIFY_PHONE_SUCCESS](state, payload) {
    state[types.USER_MODIFY_PHONE_ERRORS] = payload
    // console.log('successful, data updated', payload)
  },
  [types.USER_MODIFY_PHONE_FAILURE](state, payload) {
    state[types.USER_MODIFY_PHONE_ERRORS] = payload
    // console.log('failure, data has not updated', payload)
  },
}

const getters = {
  [types.USER_MODIFY_PHONE_ERRORS]: state => state[types.USER_MODIFY_PHONE_ERRORS],
}

export default {
  state,
  getters,
  actions,
  mutations
}
