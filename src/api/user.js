import Vue from 'vue'
import * as api from './api'
import * as types from '../store/mutation-types'

export default {
  register ({commit}, data, resolve, reject) {
    //connection success
    const success = res => {
      if (res.body.isSuccess) {
        commit(types.USER_REGISTER_SUCCESS, res.body)
        resolve(res.body)
      } else {
        // debug switch login panel!!!
        // res.body.isSuccess = true
        // commit(types.USER_REGISTER_SUCCESS, res.body)
        // resolve(res.body)

        commit(types.USER_REGISTER_FAILURE, res.body)
        reject(res.body)
      }
    }
    // connection failure
    const failure = err => {
      reject(err.body)
    }

    Vue.http
    .post(api.API_ROOT + api.API_PATH_USER_REGIST, JSON.parse(JSON.stringify(data)))
    .then(success, failure)

  },
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
      commit(types.USER_SIGN_IN_FAILURE, '网络连接问题...')
    }

    // data matched
    let logCorrect = (payload) => {
      commit(types.USER_SIGN_IN_SUCCESS, payload)
      commit(types.TOGGLE_USER_LOGIN_POPUP)
      localStorage.setItem(types.USER_SIGN_IN_INFO, JSON.stringify(payload));
      resolve()
    }

    // data has errors
    let logError = (payload) => {
      commit(types.USER_SIGN_IN_FAILURE, payload)
      reject()
    }

    Vue.http
    .post(api.API_ROOT + api.API_PATH_USER_LOGIN, JSON.parse(JSON.stringify(loginData)))
    .then(success, failure)

  },
  signOut ({commit},resolve, reject){
    localStorage.removeItem(types.USER_SIGN_IN_INFO)
    commit(types.USER_SIGN_OUT)
    resolve()
  },
  modifyInfo ( {commit}, {id, gender, region, email, nickname}) {
    const json = JSON.parse(JSON.stringify(updateData))
    const data = {
      user_id: id,
      gender,
      region,
      email,
      nickname
    }
    const success = (res) => {
      // console.log(commit)
      commit(types.USER_MODIFY_INFO_SUCCESS, res.body)
    }
    const failure = err => {
      commit(types.USER_MODIFY_INFO_FAILURE, res.body)
    }
    Vue.http.post(api.API_ROOT + api.API_PATH_USER_MODIFY_INFO, data).then(success, failure)
  },
  modifyPassword ({commit}, data) {
    const json = JSON.parse(JSON.stringify(data))
    // mobiel*|passWord*|verify_code*
    const success = (res) => {
      // console.log(commit)
      if (res.body.isSuccess) {
        commit(types.USER_MODIFY_PASSWORD_SUCCESS, res.body)
      } else {
        commit(types.USER_MODIFY_PASSWORD_FAILURE, res.body)
      }
    }
    const failure = err => {
      commit(types.USER_MODIFY_PASSWORD_FAILURE, res.body)
    }
    Vue.http.post(api.API_ROOT + api.API_PATH_USER_MODIFY_PASSWORD, json).then(success, failure)
  },
}
