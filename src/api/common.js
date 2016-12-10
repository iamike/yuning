import Vue from 'vue'
import * as api from './api'
import * as types from '../store/mutation-types'

export default {
  verifyCode ({commit}, payload, resolve, reject) {

    let userVerifyInfoObj = JSON.parse(JSON.stringify(payload))

    Vue.http.post(api.API_ROOT + api.API_PATH_USER_GET_VERIFY_CODE, userVerifyInfoObj)
    .then((res) => {
        if (res.status == 200 && res.body.isSuccess == true ) {
            console.log('send verify code success from common api ', payload)

          // console.log('testSendVerifyCode')
          // this.$store.dispatch('register')
          // this.$router.push('/user/' + res.body.result.id)
          // callback
          resolve()

        } else {
          //if user login info has error, print the error message on the form
          // console.log('test')
          this.errors = res.body.errorMsg
        }
    }, (err) => {
      // console.log(err)
      // this.$localStorage.remove('access_token')
      // this.$localStorage.remove('user_info')
      // this.$store.dispatch('logOut')
      // return 'ops....'
    })

  }
}
