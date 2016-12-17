import * as types from './mutation-types'

export default {

    [types.VERIFY_ERRORS] (state,payload) {

      state[types.VERIFY_ERRORS] = payload

    }


}
