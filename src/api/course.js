import Vue from 'vue'
import * as api from './api'
import * as types from '../store/mutation-types'

export default {
  getCourseRemainTime ({commit}, data , resolve, reject) {
    const success = res => {
      if (res.body.isSuccess) {
        commit([types.ACCOUNT_GET_COURSE_INFO_SUCCESS],res.body)
        resolve(res.body)
      } else {
        commit([types.ACCOUNT_GET_COURSE_INFO_FAILURE],res.body)
        reject(res.body)
      }

    }
    // connection failure
    const failure = err => {
      reject(err.body)
    }

    Vue.http
    .post(api.API_ROOT + api.API_PATH_ACCOUNT_COURSE_REMAIN_TIME, data)
    .then(success, failure)
  },
}
