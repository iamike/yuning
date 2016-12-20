import Vue from 'vue'
import * as api from './api'
import * as types from '../store/mutation-types'

export default {
  register ({commit}, data, resolve, reject) {
    const success = res => {
      if (res.body.isSuccess) {
        commit(types.USER_REGISTER_SUCCESS, res.body)
        resolve(res.body)
      } else {
        commit(types.USER_REGISTER_FAILURE, res.body)
        reject(res.body)
        // debug
        // let res = {
        //     "isSuccess": true,
        //     "errorCode": "200",
        //     "errorMsg": "登录成功",
        // }
        // commit(types.USER_REGISTER_SUCCESS,res)
        // resolve(res)
      }
    }
    const failure = err => {
      commit(types.USER_REGISTER_FAILURE, types.CONNECTION_ERROR)
      reject()
    }
    Vue.http
    .post(api.API_ROOT + api.API_PATH_USER_REGIST, JSON.parse(JSON.stringify(data)))
    .then(success, failure)
  },
  checkIn ({commit}) {
    if (localStorage.getItem(types.USER_SIGN_IN_INFO)) {
      commit(types.USER_CHECK_IN,JSON.parse(localStorage.getItem(types.USER_SIGN_IN_INFO)))
    }
  },
  signIn ({commit}, data, resolve, reject) {
    const success = res => {
      if (res.body.isSuccess == true) {
        commit(types.USER_SIGN_IN_SUCCESS,res.body)
        localStorage.setItem(types.USER_SIGN_IN_INFO, JSON.stringify(res.body.result))
        resolve()
      } else {
        commit(types.USER_SIGN_IN_FAILURE, res.body)
        reject()
      }
    }
    const failure = err => {
      commit(types.USER_SIGN_IN_FAILURE,  types.CONNECTION_ERROR)
      reject()
    }
    Vue.http
    .post(api.API_ROOT + api.API_PATH_USER_LOGIN, JSON.parse(JSON.stringify(data)))
    .then(success, failure)
  },
  signOut ({commit},resolve, reject){
    localStorage.removeItem(types.USER_SIGN_IN_INFO)
    commit(types.USER_SIGN_OUT)
    resolve()
  },
  modifyMobile ( {commit}, data , resolve, reject) {
    // setTimeout(()=>{
    //   commit(types.USER_MODIFY_PHONE_SUCCESS, {
    //     isSuccess:true,
    //     errorMsg:'测试成功',
    //   })
    //   resolve({
    //     isSuccess:true,
    //     errorMsg:'测试成功',
    //   })
    // },2000)
    const success = res => {
      if (res.body.isSuccess == true){
        commit(types.USER_MODIFY_PHONE_SUCCESS, res.body)
        resolve(res.body)
      } else {
        commit(types.USER_MODIFY_PHONE_FAILURE, res.body)
        reject()
      }
    }
    const failure = err => {
      commit(types.USER_MODIFY_PHONE_FAILURE, res.body)
      reject()
    }

    Vue.http
    .post(api.API_ROOT + api.API_PATH_USER_MODIFY_PHONE, data)
    .then(success, failure)
  },
  modifyAvatar ( {commit}, data , resolve, reject ) {
      const success = res => {
        if (res.body.isSuccess == true){
          commit(types.USER_MODIFY_AVATAR_SUCCESS, res.body)
          resolve(res.body)
        } else {
          commit(types.USER_MODIFY_AVATAR_FAILURE, res.body)
          reject()
        }
      }
      const failure = err => {
        commit(types.USER_MODIFY_INFO_FAILURE, res.body)
        reject()
      }
      Vue.http
      .post(api.API_ROOT + api.API_PATH_USER_UPLOAD_AVATAR, data)
      .then(success, failure)
  },
  modifyInfo ( {commit}, data , resolve, reject) {
    const success = res => {
      if (res.body.isSuccess == true){
        commit(types.USER_MODIFY_INFO_SUCCESS, res.body)
        resolve()
      } else {
        commit(types.USER_MODIFY_INFO_FAILURE, res.body)
        reject()
      }
    }
    const failure = err => {
      commit(types.USER_MODIFY_INFO_FAILURE, res.body)
      reject()
    }
    Vue.http
    .post(api.API_ROOT + api.API_PATH_USER_MODIFY_INFO, data)
    .then(success, failure)
  },
  modifyPassword ({commit}, data, resolve, reject) {
    const success = res => {
    if (res.body.isSuccess) {
        commit(types.USER_MODIFY_PASSWORD_SUCCESS, res.body)
        setTimeout(()=>{
          commit(types.USER_MODIFY_PASSWORD_SUCCESS, undefined)
        },3000)
        resolve(res.body)
      } else {
        commit(types.USER_MODIFY_PASSWORD_FAILURE, res.body)
        setTimeout(()=>{
          commit(types.USER_MODIFY_PASSWORD_FAILURE, undefined)
        },3000)
        reject(res.body)
      }
    }
    const failure = err => {
      commit(types.USER_MODIFY_PASSWORD_FAILURE, types.CONNECTION_ERROR)
      setTimeout(()=>{
        commit(types.USER_MODIFY_PASSWORD_FAILURE, undefined)
      },3000)
      reject(res.body)
    }
    Vue.http
    .post(api.API_ROOT + api.API_PATH_USER_MODIFY_PASSWORD, JSON.parse(JSON.stringify(data)))
    .then(success, failure)
  },
}
