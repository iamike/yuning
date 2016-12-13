import * as types from '../mutation-types'

const actions = {
  [types.TOGGLE_BASIC_POPUP] ({commit},modalSelector) {
    commit(types.TOGGLE_BASIC_POPUP,modalSelector)
  },
  [types.TOGGLE_SIMPLE_POPUP] ({commit},modalSelector) {
    commit(types.TOGGLE_SIMPLE_POPUP,modalSelector)
  },
}

const mutations = {
  [types.TOGGLE_BASIC_POPUP] (state, modalSelector) {
    $(modalSelector).modal({
      detachable: false,
    }).modal('toggle')
  },
  [types.TOGGLE_SIMPLE_POPUP] (state, modalSelector) {
    $(modalSelector).modal({
      detachable: false,
    }).modal('toggle')
  },
}

export default {
  actions,
  mutations
}
