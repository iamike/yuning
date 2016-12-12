import Vue from 'vue'
import * as api from './api'
import * as types from '../store/mutation-types'

export default {
  removeChild (user_id, callback) {
    //connection success
    const success = res => {
      if (res.body.isSuccess) {
        callback(res.body.result)
      } else {
        // reject(res.body)
      }
    }
    // connection failure
    const failure = err => {
      // reject(err.body)
    }

    Vue.http
    .post(api.API_ROOT + api.API_PATH_USER_REMOVE_CHILD, {user_id})
    .then(success, failure)

  },
  addChild (user_id, callback) {
    // 2.14 user_id*|baby_name*|baby_gender*|baby_birth*
    //connection success
    const success = res => {
      if (res.body.isSuccess) {
        callback(res.body.result)
      } else {
        // reject(res.body)
      }
    }
    // connection failure
    const failure = err => {
      // reject(err.body)
    }

    Vue.http
    .post(api.API_ROOT + api.API_PATH_USER_ADD_CHILD, {user_id})
    .then(success, failure)

  },
  getChilds (user_id, callback) {
    //connection success
    const success = res => {
      if (res.body.isSuccess) {
        callback(res.body.result)
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
