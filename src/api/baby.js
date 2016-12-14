import Vue from 'vue'
import * as api from './api'
import * as types from '../store/mutation-types'

export default {
  addChild ({commit}, data, resolve, reject) {
    // 2.14 user_id*|baby_name*|baby_gender*|baby_birth*

    //connection success
    const success = res => {
      if (res.body.isSuccess) {

        // callback(res.body.result)
        commit(types.CHILD_ADD_SUCCESS, res.body)
        resolve(res.body)
      } else {
        commit(types.CHILD_ADD_FAILURE, res.body)
        // reject(res.body)
      }
    }
    // connection failure
    const failure = err => {
      // reject(err.body)
      console.log(err)
    }

    Vue.http
    .post(api.API_ROOT + api.API_PATH_USER_ADD_CHILD, data)
    .then(success, failure)

  },
  removeChild ({commit}, data, resolve, reject) {
    //connection success
    const success = res => {
      if (res.body.isSuccess) {
        commit(types.CHILD_REMOVE_SUCCESS, res.body)
        resolve(res.body)
      } else {
        reject(res.body)
      }
    }
    // connection failure
    const failure = err => {
      reject(err.body)
    }

    Vue.http
    .post(api.API_ROOT + api.API_PATH_USER_REMOVE_CHILD, data )
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
