import babyApi from '../../api/baby'
import * as types from '../mutation-types'

const state = {
  [types.CHILD_LIST]: [],
  [types.CHILD_ADD_ERRORS]: undefined,
  [types.CHILD_REMOVE_ERRORS]: undefined,
  [types.CHILD_DETAIL]: {
    baby_name: 'init value',
    baby_gender: 0,
    baby_birth: 'init value',
    id:'init value',
    user_id:'init value',
  },
  baby_birth:{
    time:'0000-00-00'
  },
  [types.CHILD_MODIFY_ERRORS]: undefined,
}

const actions = {
  [types.CHILD_GET_ALL] ({commit}, userid) {
    babyApi.getChilds( userid, (childs) => {
      commit(types.CHILD_RECEIVED, childs)
    })
  },
  [types.CHILD_GET_DETAIL] ({commit, state }, data) {
    state[types.CHILD_DETAIL] = data
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
  [types.CHILD_LIST]: state => state[types.CHILD_LIST],
  [types.CHILD_LIST_COUNT]: state => getters[types.CHILD_LIST](state).length,
  [types.CHILD_DETAIL]: state => state[types.CHILD_DETAIL],
  [types.CHILD_ADD_ERRORS]: state => state[types.CHILD_ADD_ERRORS],
  [types.CHILD_REMOVE_ERRORS]: state => state[types.CHILD_REMOVE_ERRORS],
  [types.CHILD_MODIFY_ERRORS]: state => state[types.CHILD_MODIFY_ERRORS],
  baby_birth: state => state.baby_birth,
}

export default {
  state,
  getters,
  actions,
  mutations
}
