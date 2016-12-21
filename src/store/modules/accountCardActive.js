import cardApi from '../../api/card'
import * as types from '../mutation-types'

const state = {
  [types.ACCOUNT_CARD_ACTIVE_ERRORS]: undefined,
}

const actions = {
  [types.ACCOUNT_CARD_ACTIVE_ACTION] ({commit}, data) {
    return new Promise((resolve, reject) => {
      cardApi.activateCard( {commit}, data, resolve, reject )
    })
  },
}

const mutations = {
  [types.ACCOUNT_CARD_ACTIVE_SUCCESS] (state, payload) {
    state[types.ACCOUNT_CARD_ACTIVE_ERRORS] = payload
  },
  [types.ACCOUNT_CARD_ACTIVE_FAILURE] (state, payload) {
    state[types.ACCOUNT_CARD_ACTIVE_ERRORS] = payload
  },
}

const getters = {
  [types.ACCOUNT_CARD_ACTIVE_ERRORS]: state => state[types.ACCOUNT_CARD_ACTIVE_ERRORS],
}

export default {
  state,
  getters,
  actions,
  mutations
}
