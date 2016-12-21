import courseApi from '../../api/course'
import * as types from '../mutation-types'

const state = {
  [types.ACCOUNT_COURSE_INFO]: {
    result:''
  },
}

const actions = {
  [types.ACCOUNT_GET_COURSE_INFO_ACTION] ({commit}, data) {
    return new Promise((resolve, reject) => {
      courseApi.getCourseRemainTime( {commit}, data, resolve, reject )
    })
  },
}

const mutations = {
  [types.ACCOUNT_GET_COURSE_INFO_SUCCESS] (state, payload) {
    state[types.ACCOUNT_COURSE_INFO] = payload
  },
  [types.ACCOUNT_GET_COURSE_INFO_FAILURE] (state, payload) {
    state[types.ACCOUNT_GET_COURSE_INFO] = payload
  },
}

const getters = {
  [types.ACCOUNT_COURSE_INFO]: state => state[types.ACCOUNT_COURSE_INFO],
}

export default {
  state,
  getters,
  actions,
  mutations
}
