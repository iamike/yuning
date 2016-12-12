import babyApi from '../../api/baby'
import * as types from '../mutation-types'

const state = {
  [types.CHILD_LIST]: undefined,
  [types.BABY_DETAIL]: undefined,
}

const actions = {
  getAllChilds ({commit}, userid) {
    babyApi.getChilds( userid, function(childs){
      return commit(types.RECEIVED_CHILDS, childs)
    })
  }
}

const mutations = {
  [types.RECEIVED_CHILDS] (state, childs ) {
    state[types.CHILD_LIST] = childs
  },
}

const getters = {
  allChilds: state => state[types.CHILD_LIST]
}

export default {
  state,
  getters,
  actions,
  mutations
}
