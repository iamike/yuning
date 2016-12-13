import babyApi from '../../api/baby'
import * as types from '../mutation-types'

const state = {
  [types.CHILD_LIST]: undefined,
  [types.CHILD_DETAIL]: undefined,
}

const actions = {
  [types.CHILD_ADD] ({commit}, userid) {
    commit(types.CHILD_ADD,userid)
    // babyApi.addChild( function(childs){
    //   // return commit()
    //   commit(types.CHILD_ADD)
    // })
  },
  [types.CHILD_GET_ALL] ({commit}, userid) {
    babyApi.getChilds( userid, (childs) => {
      commit(types.CHILD_RECEIVED, childs)
    })
  },
}

const mutations = {
  [types.CHILD_ADD] (state, childs) {
    console.log('mutations add childs')
  },
  [types.CHILD_RECEIVED] (state, childs ) {
    state[types.CHILD_LIST] = childs
  },
}

const getters = {
  [types.CHILD_GET_ALL]: state => state[types.CHILD_LIST]
}

export default {
  state,
  getters,
  actions,
  mutations
}
