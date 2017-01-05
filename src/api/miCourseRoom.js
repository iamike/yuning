import Vue from 'vue'
import * as api from './api'
import * as types from '../store/mutation-types'

export default {
  getBooked ({commit}, data, resolve, reject) {

    const success = res => {
      if (res.ok) {
        // commit(types.USER_REGISTER_SUCCESS, res.body)
        resolve(res.body)
      } else {
        // commit(types.USER_REGISTER_FAILURE, res.body)
        reject(res.body)
      }
    }
    const failure = err => {
      // commit(types.USER_REGISTER_FAILURE, types.CONNECTION_ERROR)
      reject()
    }
    Vue.http
    .post(api.API_ROOT + api.API_PATH_GET_BOOKED_MI_COURSE_LIST, JSON.parse(JSON.stringify(data)))
    .then(success, failure)
  },
  getSig ({commit}, data, resolve, reject) {

    const success = res => {
      if (res.ok) {
        resolve(res.body)
      } else {
        reject(res.body)
      }
    }

    const failure = err => {
      reject()
    }

    Vue.http
    .jsonp('http://192.168.16.178:8099/czb-server/czb/api/getSig', {params: data, jsonp:"cb"})
    .then(success, failure)

  },




}
