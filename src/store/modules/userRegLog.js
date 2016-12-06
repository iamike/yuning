const actions = {
  toggleUserPopup ({ commit }) {
    commit('toggleUserPopup')
  },
  logIn ({ commit }) {
    commit('userlogIn')
    commit('toggleUserPopup')

  },
  logOut ({ commit }){
    commit('userlogOut')
  }
}
const mutations = {
  toggleUserPopup () {
    $('.ui.user.modal').modal('toggle')
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
