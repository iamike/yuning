import Vue from 'vue'
import * as api from './api'
import * as types from '../store/mutation-types'

export default {
  getChilds (user_id, cb) {
    //connection success
    const success = res => {
      if (res.body.isSuccess) {
        cb(res.body.result)
      } else {
                // reject(res.body)
      }
    }
    // connection failure
    const failure = err => {
      // reject(err.body)
    }

    Vue.http
    .post(api.API_ROOT + api.API_PATH_USER_GET_CHILD, {user_id})
    .then(success, failure)
  },
}
