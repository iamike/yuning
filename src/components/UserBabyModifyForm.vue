<template lang="html">
  <div class="ui form" >

      <div class="field">
        <label>宝宝名字</label>
        <input type="text" name="baby_name" v-model="CHILD_DETAIL.baby_name" >
      </div>

      <div class="field">
        <label>生日</label>
        <input type="hidden" name="baby_birth" v-model="CHILD_DETAIL.baby_birth">
        <date-picker :date="baby_birth" :option="birthdayPickerOption" :limit="limit"></date-picker>
      </div>

      <div class="field">
        <label>宝宝性别</label>
        <div class="ui selection dropdown">
          <div class="default text" v-if="CHILD_DETAIL.baby_gender==1">小王子</div>
          <div class="default text" v-else>小公主</div>
          <i class="dropdown icon"></i>
          <input type="hidden" name="baby_gender" v-model="CHILD_DETAIL.baby_gender">
          <div class="menu">
            <div class="item" data-value="1">小王子</div>
            <div class="item" data-value="0">小公主</div>
          </div>
        </div>
      </div>

      <div class="actions" >
          <div class="ui green right labeled icon button submit">
            完成，提交
            <i class="save icon"></i>
          </div>
      </div>
      <!-- errors from frontend -->
      <div class="ui error message">
        <ul>
          <li></li>
        </ul>
      </div>
    <!-- errors from backend -->
    <div v-if="CHILD_MODIFY_ERRORS"  class="ui visible message" v-bind:class="CHILD_MODIFY_ERRORS.isSuccess==true?'success':'error'">
      <ul class="list">
        <li>{{ CHILD_MODIFY_ERRORS.errorMsg }}</li>
      </ul>
    </div>
  </div>

</template>

<script>
import myDatepicker from 'vue-datepicker'

import { mapGetters } from 'vuex'

export default {
  name: 'user-baby-modify-form',
  components: {
    'date-picker': myDatepicker,
  },
  computed: {
    ...mapGetters(['CHILD_DETAIL','CHILD_MODIFY_ERRORS','baby_birth'])
  },
  data () {
    return {
      childInfo: {
        user_id: this.$store.state.userRegLog.USER_SIGN_IN_INFO.id,
        baby_name: '',
        baby_gender: 1,
        baby_birth: '',
      },
      birthdayPickerOption: {
        type: 'day',
        week: ['一', '二', '三', '四', '五', '六', '日'],
        month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        format: 'YYYY-MM-DD',
        placeholder: '',
        color: {
          header: '#66b489',
          headerText: '#ffffff'
        },
        buttons: {
          ok: '确定',
          cancel: '取消'
        },
      },
    }
  },
  mounted () {
    // INITIALISE THE ADD CHILD FORM
    const vm = this
    const $modifyChildForm = $('#modifyChildModal .ui.form')
    const modifyChildRules = {
        baby_name: {
          identifier: 'baby_name',
          rules: [
            {
              type: 'empty',
              prompt: '请输宝宝名称'
            }
          ]
        },
        baby_gender: {
          identifier: 'baby_gender',
          rules: [
            {
              type: 'empty',
              prompt: '请输入性别'
            }
          ]
        },
        baby_birth: {
          identifier: 'baby_birth',
          rules: [
            {
              type: 'empty',
              prompt: '请输入宝宝生日'
            }
          ]
        }
      }
    const modifyChildAction = (event) => {
      // copy the datepicker value into vuex state
      vm.CHILD_DETAIL.baby_birth = vm.$store.state.baby.baby_birth.time

      vm.$store.dispatch('CHILD_MODIFY_ACTION', JSON.parse(JSON.stringify(vm.CHILD_DETAIL))).then((res)=>{
        // notify the list view to update
          vm.$store.dispatch('CHILD_GET_ALL', vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id)

          //reset state for the next session
          setTimeout(()=>{
            vm.$store.dispatch('TOGGLE_SIMPLE_POPUP',{selector:'#modifyChildModal'})
          },2000)

        }).catch((err)=>{
          // TODO ask backend about this
          console.log('modify failure')
        })
    }

    $modifyChildForm.form({
      fields: modifyChildRules,
      onSuccess: modifyChildAction
    })

    $('#modifyChildModal .selection.dropdown').dropdown({
     onChange: function(val) {
        vm.$store.state.baby.CHILD_DETAIL.baby_gender = val
     }
    })
  },
  destroyed () {
    $('#modifyChildModal').dropdown('destroy')

  }
}
</script>

<style lang="css">
</style>
