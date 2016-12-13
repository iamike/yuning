import * as types from '../mutation-types'

const actions = {
  [types.TOGGLE_BASIC_POPUP] ({commit}) {
    commit(types.TOGGLE_BASIC_POPUP)
  },
  [types.TOGGLE_SIMPLE_POPUP] ({commit}) {
    commit(types.TOGGLE_SIMPLE_POPUP)
  },
}

const mutations = {
  [types.TOGGLE_BASIC_POPUP] (state) {
    $('#basicModal').modal({
      detachable: false,
    }).modal('toggle')
  },
  [types.TOGGLE_SIMPLE_POPUP] (state) {
    $('#simpleModal').modal({
      detachable: false,
    }).modal('toggle')
  },
}

export default {
  actions,
  mutations
}
