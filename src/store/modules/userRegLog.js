import userApi from '../../api/user'
import commonApi from '../../api/common'
import * as types from '../mutation-types'

const state = {
  [types.USER_SIGN_IN_INFO]: undefined,
  [types.USER_SIGN_IN_ERRORS]: undefined
}
const actions = {
  [types.TOGGLE_USER_LOGIN_POPUP] ({ commit }) {
    commit(types.TOGGLE_USER_LOGIN_POPUP)
  },
  [types.TOGGLE_USER_REGISTER_POPUP] ({ commit }) {
    commit(types.TOGGLE_USER_REGISTER_POPUP)
  },
  [types.USER_CHECK_IN] ({commit}, data) {
    userApi.checkIn({commit}, data)
  },
  [types.USER_SIGN_IN_ACTION] ({commit}, data )  {
    let userSignInApiResult = new Promise((resolve, reject) => {
      userApi.signIn({commit}, data, resolve, reject)
    })
    return userSignInApiResult
  },
  [types.USER_SIGN_OUT] ({commit}) {
    let userSignOutApiResult = new Promise((resolve, reject) => {
      userApi.signOut({commit},resolve, reject)
    })
    return userSignOutApiResult
  },
  [types.MODIFY_USER_INFO_START] ({commit}, newData) {
    if ( newData.id ) {
      commit(types.MODIFY_USER_INFO_PROCESSING)
      userApi.modifyInfo({commit}, newData)
    }
  },
}
const mutations = {
  [types.TOGGLE_USER_LOGIN_POPUP] () {
    $('.coupled.modal').modal({allowMultiple: true})
    $('.ui.user-login.modal').modal('toggle')
  },
  [types.TOGGLE_USER_REGISTER_POPUP] () {
    $('.ui.user-login.modal').modal('hide')
    $('.ui.user-register.modal')
    .modal({
      transition:'vertical flip',
      mobileTransition : 'horizontal flip'
    })
    .modal('toggle')
  },
  // SIGN IN
  [types.USER_SIGN_IN_SUCCESS] (state, payload) {
    state[types.USER_SIGN_IN_INFO] = payload
    state[types.USER_SIGN_IN_ERRORS] = 'success'
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
  [types.MODIFY_USER_INFO_PROCESSING] ({commit}) {
    // MAYBE PUT LOADING? AT HERE?
    // console.log('user is at updating infomation')
  },
  [types.MODIFY_USER_INFO_SUCCESS] ({commit},payload) {
    console.log('successful, data updated',payload)
  },
  [types.MODIFY_USER_INFO_FAILURE] ({commit},payload) {
    console.log('failure, data has not updated',payload)
  }
}
const getters = {
  [types.USER_SIGN_IN_INFO]: state => state[types.USER_SIGN_IN_INFO],
  [types.USER_SIGN_IN_ERRORS]: state => state[types.USER_SIGN_IN_ERRORS]
}
export default {
  state,
  getters,
  actions,
  mutations
}
