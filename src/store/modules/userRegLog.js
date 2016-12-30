import userApi from '../../api/user'
import * as types from '../mutation-types'

const state = {
  [types.USER_SIGN_IN_INFO]: undefined,
  [types.USER_SIGN_IN_ERRORS]: undefined,
  [types.USER_REGISTER_INFO]: undefined,
  [types.USER_REGISTER_ERRORS]: undefined,
  [types.USER_LOGIN_REDIRECT]:undefined,
  [types.USER_LOGIN_REDIRECT_BEHAVIOR]:undefined,
}
const actions = {
  [types.USER_SET_REDIRECT] ({commit, state}, data) {
      // console.log(data)
      state[types.USER_LOGIN_REDIRECT] = data
  },
  [types.USER_REGISTER_ACTION] ({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      state[types.USER_REGISTER_INFO] = data
      userApi.register({commit}, data, resolve, reject)
    })
  },
  [types.USER_CHECK_IN] ({commit,state}, data) {
    userApi.checkIn({commit}, data)
  },
  [types.USER_SIGN_IN_ACTION] ({commit}, data )  {
    return new Promise((resolve, reject) => {
      userApi.signIn({commit}, data, resolve, reject)
    })
  },
  [types.USER_SIGN_OUT] ({commit}) {
    return new Promise((resolve, reject) => {
      userApi.signOut({commit},resolve, reject)
    })
  },
}
const mutations = {
  // REGISTER
  [types.USER_REGISTER_SUCCESS] (state, payload) {
    state[types.USER_REGISTER_ERRORS] = payload
  },
  [types.USER_REGISTER_FAILURE] (state, payload) {
    state[types.USER_REGISTER_ERRORS] = payload
  },
  // CHECK in
  [types.USER_CHECK_IN] (state, payload) {
    state[types.USER_SIGN_IN_INFO] = payload
  },
  // SIGN IN
  [types.USER_SIGN_IN_SUCCESS] (state, payload) {
    state[types.USER_SIGN_IN_INFO] = payload.result
    state[types.USER_SIGN_IN_ERRORS] = payload
  },
  [types.USER_SIGN_IN_FAILURE] (state, payload) {
    state[types.USER_SIGN_IN_INFO] = undefined
    state[types.USER_SIGN_IN_ERRORS] = payload
  },
  // SIGN OUT
  [types.USER_SIGN_OUT] (state) {
    state[types.USER_SIGN_IN_INFO] = undefined
    state[types.USER_SIGN_IN_ERRORS] = undefined
  },
}
const getters = {
  [types.USER_SIGN_IN_INFO]: state => state[types.USER_SIGN_IN_INFO],
  [types.USER_SIGN_IN_ERRORS]: state => state[types.USER_SIGN_IN_ERRORS],
  [types.USER_REGISTER_INFO]: state => state[types.USER_REGISTER_INFO],
  [types.USER_REGISTER_ERRORS]: state => state[types.USER_REGISTER_ERRORS],
  [types.USER_LOGIN_REDIRECT]: state => state[types.USER_LOGIN_REDIRECT],
  [types.USER_LOGIN_REDIRECT_BEHAVIOR]: state => state[types.USER_LOGIN_REDIRECT_BEHAVIOR],

}
export default {
  state,
  getters,
  actions,
  mutations
}
