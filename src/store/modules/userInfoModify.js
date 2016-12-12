import userApi from '../../api/user'
import commonApi from '../../api/common'
import * as types from '../mutation-types'

const actions = {
  [types.USER_MODIFY_INFO_START] ({commit}, newData) {
    if ( newData.id ) {
      commit(types.USER_MODIFY_INFO_PROCESSING)
      userApi.modifyInfo({commit}, newData)
    }
  },
}

const mutations = {
  [types.USER_MODIFY_INFO_PROCESSING] ({commit}) {
    // MAYBE PUT LOADING? AT HERE?
    // console.log('user is at updating infomation')
  },
  [types.USER_MODIFY_INFO_SUCCESS] ({commit},payload) {
    console.log('successful, data updated',payload)
  },
  [types.USER_MODIFY_INFO_FAILURE] ({commit},payload) {
    console.log('failure, data has not updated',payload)
  },
}

export default {
  actions,
  mutations
}
