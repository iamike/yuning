import userApi from '../../api/user'
import * as types from '../mutation-types'

const state = {
  [types.USER_MODIFY_AVATAR_ERRORS]: undefined,
}

const actions = {
  // [types.USER_MODIFY_AVATAR_UPLOAD] ({commit}, data) {
  //   commit([types.USER_MODIFY_AVATAR_UPLOAD],data)
  // },
  [types.USER_MODIFY_AVATAR_ACTION]({ commit }, data) {
    return new Promise((resolve,reject)=>{
      userApi.modifyAvatar({ commit }, data, resolve, reject)
    })
  },
}

const mutations = {
  // [types.USER_MODIFY_AVATAR_UPLOAD] (state, payload) {
  //   // console.log(payload)
  //   // state[types.USER_MODIFY_AVATAR_DATA] = payload
  // },
  [types.USER_MODIFY_AVATAR_SUCCESS](state, payload) {
    state[types.USER_MODIFY_AVATAR_ERRORS] = payload
    // console.log('successful, data updated', payload)
  },
  [types.USER_MODIFY_AVATAR_FAILURE](state, payload) {
    state[types.USER_MODIFY_AVATAR_ERRORS] = payload
    // console.log('failure, data has not updated', payload)
  },
}

const getters = {
  [types.USER_MODIFY_AVATAR_ERRORS]: state => state[types.USER_MODIFY_AVATAR_ERRORS],
  // [types.USER_MODIFY_AVATAR_DATA]: state => state[types.USER_MODIFY_AVATAR_DATA],
}

export default {
  state,
  getters,
  actions,
  mutations
}
