import * as types from '../mutation-types'

const actions = {
  [types.TOGGLE_BASIC_POPUP] ({commit},modalSelector) {
    commit(types.TOGGLE_BASIC_POPUP,modalSelector)
  },
  [types.TOGGLE_SIMPLE_POPUP] ({commit},modalSelector) {

    commit(types.TOGGLE_SIMPLE_POPUP,modalSelector)
  },
}

const mutations = {
  [types.TOGGLE_BASIC_POPUP] (state, {selector,onShowAction, onApproveAction, onDenyAction}) {
    $(selector).modal({
      detachable: true,
      onShow    : function(){
        onShowAction && onShowAction()
      },
      onDeny    : function(){
        onDenyAction && onDenyAction()
      },
      onApprove : function() {
        onApproveAction && onApproveAction()
      },
    })
    .modal('toggle')
  },
  [types.TOGGLE_SIMPLE_POPUP] (state, {selector,onShowAction, onApproveAction, onDenyAction}) {
    // console.log(selector)
    $(selector).modal({
      detachable: true,
      onShow    : function(){
        onShowAction && onShowAction()
      },
      onDeny    : function(){
        onDenyAction && onDenyAction()
      },
      onApprove : function() {
        onApproveAction && onApproveAction()
      },
    }).modal('toggle')
  },
}

export default {
  actions,
  mutations
}
