import Vue from 'vue'
import * as api from './api'
import * as types from '../store/mutation-types'

export default {
  getVerifyCode ({commit}, data, resolve, reject) {

    Vue.http.post(api.API_ROOT + api.API_PATH_USER_GET_VERIFY_CODE, data)
    .then((res) => {
        // console.log(res)
        if (res.status == 200 && res.body.result == true ) {
            // console.log('send verify code success from common api ', res.body.msg)
          resolve(res.body.msg)
        } else {
          reject(res.body.msg)
        }
    }, (err) => {
      reject(res.body.msg)
    })
  },
  checkVerifyCode ({commit}, data, resolve, reject) {
    // console.log(data)
    Vue.http.post(api.API_ROOT + api.API_PATH_USER_CHK_VERIFY_CODE, data)
    .then((res) => {
        // console.log(res)
        if (res.status == 200 && res.body.result == true ) {
            // console.log('send verify code success from common api ', res.body.msg)
          resolve(res.body.msg)
        } else {
          reject(res.body.msg)
        }
    }, (err) => {
      reject(res.body.msg)
    })
  }
}
