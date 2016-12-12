import babyApi from '../../api/baby'
import * as types from '../mutation-types'

const state = {
  [types.CHILD_LIST]: undefined,
  [types.CHILD_DETAIL]: undefined,
}

const actions = {
  getAllChilds ({commit}, userid) {
    babyApi.getChilds( userid, (childs) => {
      commit(types.CHILD_RECEIVED, childs)
    })
  },
  addChild () {
    babyApi.addChild( userid, function(childs){
      // return commit()
    })
  },
}

const mutations = {
  [types.TOGGLE_CHILD_ADD_POPUP] (state) {
    
  },
  [types.CHILD_RECEIVED] (state, childs ) {
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
