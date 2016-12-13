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
    $('.ui.basic.modal').modal({
      detachable: false,
    }).modal('toggle')
  },
  [types.TOGGLE_SIMPLE_POPUP] (state) {
    $('.ui.modal').modal({
      detachable: false,
    }).modal('toggle')
  },
}

export default {
  actions,
  mutations
}
