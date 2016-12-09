import Vue from 'vue'
import * as api from './api'
import * as types from '../store/mutation-types'

export default {
  signIn ({commit}, loginData ) {

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
    }

    // data has errors
    let logError = (payload) => {
      commit(types.USER_SIGN_IN_FAILURE, payload)
    }

    // api request
    Vue.http
    .post(api.API_ROOT + api.API_PATH_USER_LOGIN, JSON.parse(JSON.stringify(loginData)))
    .then(success, failure)

  },
  signOut ({commit}, userData ){
    this.$localStorage.remove('access_token')
    this.$localStorage.remove('user_info')
    this.$store.dispatch('logOut')
    this.$router.push('/')
  },
  modifyInfo ( {commit}, updateData) {
    const json = JSON.parse(JSON.stringify(updateData))
    const newJson = {
      user_id: updateData.id,
      gender: updateData.gender,
      region: updateData.region,
      email: updateData.email,
      nickname: updateData.nickname
    }
    const success = (res) => {
      console.log(commit)
      commit(types.MODIFY_USER_INFO_SUCCESS,res.body)
    }
    const failure = err => {
      commit(types.MODIFY_USER_INFO_FAILURE)
    }
    Vue.http.post(api.API_ROOT + api.API_PATH_USER_MODIFY_INFO, newJson).then(success, failure)
  }
}
