import Vue from 'vue'
import * as api from './api'
import * as types from '../store/mutation-types'

export default {
  getVerifyCode ({commit}, data, resolve, reject) {
    Vue.http.post(api.API_ROOT + api.API_PATH_USER_GET_VERIFY_CODE, data)
    .then((res) => {
        if (res.status == 200 && res.body.result == true ) {
          resolve(res.body)
        } else {
          commit(types.VERIFY_ERRORS,res.body)
          setTimeout(()=>{
            commit(types.VERIFY_ERRORS,undefined)
          },2000)
          reject(res.body)
        }
    }, (err) => {
      // state.VERIFY_ERRORS = types.CONNECTION_ERROR
      reject(err)
    })
  },
  checkVerifyCode ({commit}, data, resolve, reject) {
    Vue.http.post(api.API_ROOT + api.API_PATH_USER_CHK_VERIFY_CODE, data)
    .then((res) => {
        if (res.status == 200 && res.body.result == true ) {
          resolve(res.body.msg)
        } else {
          reject(res.body.msg)
        }
    }, (err) => {
      reject(err.body.msg)
    })
  }
}
