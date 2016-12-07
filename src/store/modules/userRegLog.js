const actions = {
  toggleUserLoginPopup ({ commit }) {
    commit('toggleUserLoginPopup')
  },
  toggleUserRegisterPopup ({ commit }) {
    commit('toggleUserRegisterPopup')
  },
  logIn ({ commit }) {
    commit('userlogIn')
    commit('toggleUserLoginPopup')
  },
  logOut ({ commit }){
    commit('userlogOut')
  },
  register ({ commit }){
    console.log('user is at registing')
  }
}
const mutations = {
  toggleUserLoginPopup () {
    $('.coupled.modal').modal({allowMultiple: true})
    $('.ui.user-login.modal').modal('toggle')
  },
  toggleUserRegisterPopup () {
    $('.ui.user-login.modal').modal('hide')
    $('.ui.user-register.modal').modal('toggle')
  },
  userlogIn (state) {
    state.userLoginStatus = true
    state.userInfo = JSON.parse(window.localStorage.user_info)
  },
  userlogOut (state) {
    state.userLoginStatus = false
    state.userInfo = undefined
  }
}
const state = {
  userLoginStatus: false,
  userInfo: undefined
}
const getters = {
  userLoginStatus: state => state.userLoginStatus,
  userInfo: state => state.userInfo
}
export default {
  state,
  getters,
  actions,
  mutations
}
