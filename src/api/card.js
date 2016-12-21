import Vue from 'vue'
import * as api from './api'
import * as types from '../store/mutation-types'

export default {
  getCards (user_id, callback) {
    //connection success
    const success = res => {
      if (res.body.isSuccess) {
        callback(res.body.result)
        // resolve(res.body)
      } else {
        // reject(res.body)
      }
    }
    // connection failure
    const failure = err => {
      // reject(err.body)
    }

    Vue.http
    .post(api.API_ROOT + api.API_PATH_ACCOUNT_CARD_LIST, user_id)
    .then(success, failure)
  },
  activateCard ({commit}, data , resolve, reject) {
    //connection success
    const success = res => {

      if (res.body.isSuccess) {
        commit([types.ACCOUNT_CARD_ACTIVE_SUCCESS],res.body)
        resolve(res.body)
      } else {
        commit([types.ACCOUNT_CARD_ACTIVE_FAILURE],res.body)
        reject(res.body)
      }
      setTimeout(()=>{
        commit(types.ACCOUNT_CARD_ACTIVE_FAILURE, undefined)
      },3000)
    }
    // connection failure
    const failure = err => {
      reject(err.body)
    }

    Vue.http
    .post(api.API_ROOT + api.API_PATH_ACCOUNT_CARD_ACTIVE, data)
    .then(success, failure)
  }
}
