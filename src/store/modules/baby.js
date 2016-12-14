import babyApi from '../../api/baby'
import * as types from '../mutation-types'

const state = {
  [types.CHILD_LIST]: undefined,
  [types.CHILD_DETAIL]: undefined,
  [types.CHILD_ADD_ERRORS]: undefined,
  [types.CHILD_REMOVE_ERRORS]: undefined,
  [types.CHILD_MODIFY_ERRORS]: undefined,
}

const actions = {
  [types.CHILD_GET_ALL] ({commit}, userid) {
    babyApi.getChilds( userid, (childs) => {
      commit(types.CHILD_RECEIVED, childs)
    })
  },
  [types.CHILD_ADD_ACTION] ({commit}, data) {
    return new Promise((resolve, reject) => {
      babyApi.addChild({commit}, data, resolve, reject)
    })
  },
  [types.CHILD_REMOVE_ACTION] ({commit}, data) {
    return new Promise((resolve, reject) => {
      babyApi.removeChild({commit}, data, resolve, reject)
    })
  },
  [types.CHILD_MODIFY_ACTION] ({commit}, data) {
    return new Promise((resolve, reject) => {
      babyApi.modifyChild({commit}, data, resolve, reject)
    })
  },
}

const mutations = {
  [types.CHILD_RECEIVED] (state, childs) {
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
  [types.CHILD_MODIFY_SUCCESS] (state, payload) {
    state[types.CHILD_MODIFY_ERRORS] = payload
  },
  [types.CHILD_MODIFY_FAILURE] (state, payload) {
    state[types.CHILD_MODIFY_ERRORS] = payload
  },
}

const getters = {
  [types.CHILD_GET_ALL]: state => state[types.CHILD_LIST],
  [types.CHILD_ADD_ERRORS]: state => state[types.CHILD_ADD_ERRORS],
  [types.CHILD_REMOVE_ERRORS]: state => state[types.CHILD_REMOVE_ERRORS],
  [types.CHILD_MODIFY_ERRORS]: state => state[types.CHILD_MODIFY_ERRORS],
}

export default {
  state,
  getters,
  actions,
  mutations
}
