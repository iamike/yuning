import user from '../../api/user'
import * as types from '../mutation-types'

const state = {
  [types.USER_SIGN_IN_INFO]: undefined,
  [types.USER_SIGN_IN_ERRORS]: undefined
}
const actions = {
  toggleUserLoginPopup ({ commit }) {
    commit('toggleUserLoginPopup')
  },
  toggleUserRegisterPopup ({ commit }) {
    commit('toggleUserRegisterPopup')
  },
  [types.USER_SIGN_IN] ({commit}, data ) {
    user.signIn({commit}, data)
  },
  [types.MODIFY_USER_INFO_START] ({commit}, newData) {
    if ( newData.id ) {
      commit(types.MODIFY_USER_INFO_PROCESSING)
      user.modifyInfo({commit}, newData)
    }
  }
}
const mutations = {
  toggleUserLoginPopup () {
    $('.coupled.modal').modal({allowMultiple: true})
    $('.ui.user-login.modal').modal('toggle')
  },
  toggleUserRegisterPopup () {
    $('.ui.user-login.modal').modal('hide')
    $('.ui.user-register.modal').modal({transition:'vertical flip',mobileTransition : 'horizontal flip'}).modal('toggle')
  },
  // SIGN IN/OUT
  [types.USER_SIGN_IN_SUCCESS] (state, payload) {
    state[types.USER_SIGN_IN_INFO] = payload
  },
  [types.USER_SIGN_IN_FAILURE] (state, payload) {
    state[types.USER_SIGN_IN_INFO] = undefined
    state[types.USER_SIGN_IN_ERRORS] = payload
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
