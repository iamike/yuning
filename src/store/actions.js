import commonApi from '../api/common'
import * as types from './mutation-types'

export const GET_VERIFY_CODE = ({ commit }, data ) => {
  return new Promise((resolve, reject) => {
    // console.log('action',data)
    commonApi.getVerifyCode({commit}, data, resolve, reject)
  })
}

export const CHECK_VERIFY_CODE = ({ commit }, data ) => {
  return new Promise((resolve, reject) => {
    commonApi.getVerifyCode({commit}, data, resolve, reject)
  })
}

export const RE_VERIFY_TIME_COUNT = ({ commit, state }) => {
  const timerInstance = setInterval(()=>{
    if (state.global.verifyRequestRemain < 1 ) {
      state.global.verifyRequestRemain = state.global.verifyCodeInterval
      clearInterval(timerInstance)
      // resolve()
      return
    }
    state.global.verifyRequestRemain -= 1
    // console.log('test setInterval in actions', state.global.verifyRequestRemain)
  },1000)
}
