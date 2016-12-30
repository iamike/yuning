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
  [types.TOGGLE_BASIC_POPUP] (state, {selector,onApproveAction, onDenyAction}) {
    $(selector).modal({
      detachable: false,
      // onShow    : function(){
      //   onShowAction && onShowAction()
      // },
      onDeny    : function(){
        onDenyAction && onDenyAction()
      },
      onApprove : function() {
        onApproveAction && onApproveAction()
      },
    })
    .modal('toggle')
  },
  [types.TOGGLE_SIMPLE_POPUP] (state, {
    needToggle,
    selector,
    onApproveAction,
    onDenyAction,
    detachable,
    allowMultiple,
    onHidden,
    onHide,
    onShow,
    observeChanges,
    onVisible,
    closable,
    dimmerSettings,
    }) {
    // console.log(closable==undefined)
    $(selector).modal({
      observeChanges:observeChanges!=undefined ? observeChanges:false,
      allowMultiple: allowMultiple!=undefined ? allowMultiple : false,
      detachable: detachable!=undefined ? detachable : false,
      closable: closable!=undefined ? closable : true,
      dimmerSettings: dimmerSettings!=undefined ? dimmerSettings : {closable:false, useCSS:true, opacity:0.8},
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
      onHide : function() {
        // console.log('test')
        onHide && onHide()
      },
      onVisible: function () {
        onVisible && onVisible()
      },
    }).modal(needToggle?needToggle:'toggle')

  },
}

export default {
  actions,
  mutations
}
