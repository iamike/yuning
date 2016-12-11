import Vue from 'vue'
import * as api from './api'
import * as types from '../store/mutation-types'

export default {
  verifyCode ({commit}, payload, resolve, reject) {

    let userVerifyInfoObj = JSON.parse(JSON.stringify(payload))
    Vue.http.post(api.API_ROOT + api.API_PATH_USER_GET_VERIFY_CODE, userVerifyInfoObj)
    .then((res) => {
        console.log(res)
        if (res.status == 200 && res.body.result == true ) {
            console.log('send verify code success from common api ', res.body.msg)
          resolve(res.body.msg)
        } else {
          reject(res.body.msg)
        }
    }, (err) => {
      reject(res.body.msg)
    })
  }
}
