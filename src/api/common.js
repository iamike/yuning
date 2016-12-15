import Vue from 'vue'
import * as api from './api'
import * as types from '../store/mutation-types'

export default {
  getVerifyCode ({commit,state}, data, resolve, reject) {
    Vue.http.post(api.API_ROOT + api.API_PATH_USER_GET_VERIFY_CODE, data)
    .then((res) => {
        if (res.status == 200 && res.body.result == true ) {
          resolve(res.body.msg)
        } else {
          reject(res.body.msg)
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
