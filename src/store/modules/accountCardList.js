import cardApi from '../../api/card'
import * as types from '../mutation-types'

const state = {
  [types.ACCOUNT_CARD_LIST]: [],

}

const actions = {
  [types.ACCOUNT_GET_CARDS] ({commit}, userid) {
    cardApi.getCards( userid, (cards) => {
      commit(types.ACCOUNT_CARD_RECEIVED, cards)
    })
  },
}

const mutations = {
  [types.ACCOUNT_CARD_RECEIVED] (state, cards) {
    state[types.ACCOUNT_CARD_LIST] = cards
  },
}

const getters = {
  [types.ACCOUNT_CARD_LIST]: state => state[types.ACCOUNT_CARD_LIST],
  [types.ACCOUNT_CARD_LIST_COUNT]: state => getters[types.ACCOUNT_CARD_LIST](state).length,
  [types.ACCOUNT_CARD_LIST_ACTIVE]: state => getters[types.ACCOUNT_CARD_LIST](state).filter(card => card.status =='ACT'),
  [types.ACCOUNT_CARD_LIST_ACTIVE_COUNT]: state => getters[types.ACCOUNT_CARD_LIST_ACTIVE](state).length,
  [types.ACCOUNT_CARD_LIST_USED]: state => getters[types.ACCOUNT_CARD_LIST](state).filter(card => card.status =='USED'),
  [types.ACCOUNT_CARD_LIST_USED_COUNT]: state => getters[types.ACCOUNT_CARD_LIST_USED](state).length,
}

export default {
  state,
  getters,
  actions,
  mutations
}
