import Vue from 'vue'
import * as api from './api'
import * as types from '../store/mutation-types'

export default {
  //check in by localStorage data
  checkIn ({commit}) {
    if (localStorage.getItem(types.USER_SIGN_IN_INFO)) {
      const userInfo = JSON.parse(localStorage.getItem(types.USER_SIGN_IN_INFO))
      commit(types.USER_SIGN_IN_SUCCESS, userInfo)
    }
  },
  signIn ({commit}, loginData, resolve, reject ) {
    // success get info from server
    let success = (res) => {
      if (res.body.isSuccess == true) {
        logCorrect(res.body.result)
      } else {
        logError(res.body.errorMsg)
      }
    }
    // connection problem?
    let failure = (err) => {
      commit(types.USER_SIGN_IN_FAILURE, '网络连接有些小问题...')
    }

    // data matched
    let logCorrect = (payload) => {
      commit(types.USER_SIGN_IN_SUCCESS, payload)
      commit(types.TOGGLE_USER_LOGIN_POPUP)
      localStorage.setItem(types.USER_SIGN_IN_INFO, JSON.stringify(payload));
      // console.log('job finished from API')
      // return 'success from api'
      // setTimeout(function(){
        resolve()
      // },2000)

    }

    // data has errors
    let logError = (payload) => {
      commit(types.USER_SIGN_IN_FAILURE, payload)
      // console.log('job finished from API')
      // return 'failure from api'
      // setTimeout(function(){
      reject()
      // },2000)
    }

    Vue.http
    .post(api.API_ROOT + api.API_PATH_USER_LOGIN, JSON.parse(JSON.stringify(loginData)))
    .then(success, failure)

  },
  signOut ({commit}){
    localStorage.removeItem(types.USER_SIGN_IN_INFO)
    commit(types.USER_SIGN_OUT)
  },
  modifyInfo ( {commit}, {id, gender, region, email, nickname}) {
    const json = JSON.parse(JSON.stringify(updateData))
    const newJson = {
      user_id: id,
      gender,
      region,
      email,
      nickname
    }
    const success = (res) => {
      // console.log(commit)
      commit(types.MODIFY_USER_INFO_SUCCESS, res.body)
    }
    const failure = err => {
      commit(types.MODIFY_USER_INFO_FAILURE)
    }
    Vue.http.post(api.API_ROOT + api.API_PATH_USER_MODIFY_INFO, newJson).then(success, failure)
  }
}
