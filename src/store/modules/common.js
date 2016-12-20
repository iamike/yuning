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
      detachable: false,
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
  [types.TOGGLE_SIMPLE_POPUP] (state, {selector,onShowAction, onApproveAction, onDenyAction, detachable, allowMultiple, onHidden, onHide, onShow, observeChanges,onVisible}) {
    // console.log(selector)
    $(selector).modal({
      observeChanges:observeChanges?observeChanges:false,
      allowMultiple: allowMultiple ? allowMultiple : false,
      detachable: detachable ? detachable : false,
      onShow    : function(){
        onShowAction && onShowAction()
      },
      onDeny    : function(){
        onDenyAction && onDenyAction()
      },
      onApprove : function() {
        onApproveAction && onApproveAction()
      },
      onHidden : function() {
        onHidden && onHidden()
      },
      onShow : function() {
        onShow && onShow()
      },
    }).modal('toggle')
  },
}

export default {
  actions,
  mutations
}
