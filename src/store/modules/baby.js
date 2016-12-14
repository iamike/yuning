import babyApi from '../../api/baby'
import * as types from '../mutation-types'

const state = {
  [types.CHILD_LIST]: undefined,
  [types.CHILD_DETAIL]: undefined,
  [types.CHILD_ADD_ERRORS]: undefined,
  [types.CHILD_REMOVE_ERRORS]: undefined,
}

const actions = {
  [types.CHILD_ADD_ACTION] ({commit}, data) {
    return new Promise((resolve, reject) => {
      babyApi.addChild({commit}, data, resolve, reject)
    })
  },
  [types.CHILD_REMOVE_ACTION] ({commit}, data) {
    // console.log(data)
    // commit('TOGGLE_BASIC_POPUP')
    return new Promise((resolve, reject) => {
      babyApi.removeChild({commit}, data, resolve, reject)
    })
  },
  [types.CHILD_GET_ALL] ({commit}, userid) {
    babyApi.getChilds( userid, (childs) => {
      commit(types.CHILD_RECEIVED, childs)
    })
  },
}

const mutations = {
  [types.CHILD_RECEIVED] (state, childs ) {
    state[types.CHILD_LIST] = childs
  },
  [types.CHILD_ADD_SUCCESS] (state, payload) {
    state[types.CHILD_ADD_ERRORS] = payload
  },
  [types.CHILD_ADD_FAILURE] (state, payload) {
    state[types.CHILD_ADD_ERRORS] = payload
  },
  [types.CHILD_REMOVE_SUCCESS] (state, payload) {
    state[types.CHILD_REMOVE_ERRORS] = payload
  },
  [types.CHILD_REMOVE_FAILURE] (state, payload) {
    state[types.CHILD_REMOVE_ERRORS] = payload
  },
}

const getters = {
  [types.CHILD_GET_ALL]: state => state[types.CHILD_LIST],
  [types.CHILD_ADD_ERRORS]: state => state[types.CHILD_ADD_ERRORS],
  [types.CHILD_REMOVE_ERRORS]: state => state[types.CHILD_REMOVE_ERRORS],
}

export default {
  state,
  getters,
  actions,
  mutations
}
