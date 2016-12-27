import miCourseRoom from '../../api/miCourseRoom'
import * as types from '../mutation-types'


const actions = {
  [types.GET_BOOKED_MI_COURSE_ACTION]({ commit }, data) {
    return new Promise((resolve,reject)=>{
      miCourseRoom.getBooked({ commit }, data, resolve, reject)
    })
  },
}

// const mutations = {
//   [types.USER_MODIFY_AVATAR_SUCCESS](state, payload) {
//     state[types.USER_MODIFY_AVATAR_ERRORS] = payload
//   },
//   [types.USER_MODIFY_AVATAR_FAILURE](state, payload) {
//     state[types.USER_MODIFY_AVATAR_ERRORS] = payload
//   },
// }

// const getters = {
//   [types.USER_MODIFY_AVATAR_ERRORS]: state => state[types.USER_MODIFY_AVATAR_ERRORS],
// }

export default {
  actions,
}
