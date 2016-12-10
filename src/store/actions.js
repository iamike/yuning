import commonApi from '../api/common'

export const SEND_VERIFY_CODE = ({commit}, data ) => {
  let sendVerifyCodeResult = new Promise((resolve, reject) => {
    commonApi.verifyCode({commit}, data, resolve, reject)
  })
  return sendVerifyCodeResult
}
