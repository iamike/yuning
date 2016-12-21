import coinApi from '../../api/coin'
import * as types from '../mutation-types'

const state = {
  [types.ACCOUNT_COIN_INFO]: {
    result:''
  },
}

const actions = {
  [types.ACCOUNT_GET_COIN_INFO_ACTION] ({commit}, data) {
    return new Promise((resolve, reject) => {
      coinApi.getCoinRemainValue( {commit}, data, resolve, reject )
    })
  },
}

const mutations = {
  [types.ACCOUNT_GET_COIN_INFO_SUCCESS] (state, payload) {
    state[types.ACCOUNT_COIN_INFO] = payload
  },
  [types.ACCOUNT_GET_COIN_INFO_FAILURE] (state, payload) {
    state[types.ACCOUNT_GET_COIN_INFO] = payload
  },
}

const getters = {
  [types.ACCOUNT_COIN_INFO]: state => state[types.ACCOUNT_COIN_INFO],
}

export default {
  state,
  getters,
  actions,
  mutations
}
