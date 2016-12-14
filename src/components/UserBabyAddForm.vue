<template lang="html">
  <div class="ui form">
      <div class="field">
        <label>宝宝名字</label>
        <input type="text" name="baby_name" v-model="newChildInfo.baby_name">
      </div>

      <div class="field">
        <label>生日</label>
        <input type="hidden" name="baby_birth" v-model="baby_birth.time">
        <date-picker  :date="baby_birth" :option="birthdayPickerOption" :limit="limit"></date-picker>
      </div>
    <div class="field">
      <label>宝宝性别</label>
      <div class="ui selection dropdown">
        <div class="default text">请选择</div>
        <i class="dropdown icon"></i>
        <input type="hidden" name="baby_gender">
        <div class="menu">
          <div class="item" data-value="1">小王子</div>
          <div class="item" data-value="0">小公主</div>
        </div>
      </div>
    </div>
    <div class="actions" >
        <div class="ui green right labeled icon button submit">
          完成，提交
          <i class="checkmark icon"></i>
        </div>
    </div>
    <!-- errors from frontend -->
    <div class="ui error message">
      <ul>
        <li></li>
      </ul>
    </div>
    <!-- errors from backend -->
    <div v-if="CHILD_ADD_ERRORS"  class="ui visible message" v-bind:class="CHILD_ADD_ERRORS.isSuccess==true?'success':'error'">
      <ul class="list">
        <li>{{ CHILD_ADD_ERRORS.errorMsg }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import myDatepicker from 'vue-datepicker'
import { mapGetters } from 'vuex'

export default {
  name: 'user-baby-add-form',
  components: {
    'date-picker': myDatepicker,
  },
  computed: {
    ...mapGetters(['CHILD_ADD_ERRORS'])
  },
  data () {
    return {
      newChildInfo: {
        user_id: this.$store.state.userRegLog.USER_SIGN_IN_INFO.id,
        baby_name: '',
        baby_gender: 1,
        baby_birth: '',
      },
      baby_birth: {
        time: ''
      },
      birthdayPickerOption: {
        type: 'day',
        week: ['一', '二', '三', '四', '五', '六', '日'],
        month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        format: 'YYYY-MM-DD',
        placeholder: '宝宝是何时出生的?',
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
    const $addChildForm = $('#addChildModal .ui.form')
    const addChildRules = {
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
    const addChildAction = (event) => {
      //fix event problem
      vm.newChildInfo.baby_birth = vm.baby_birth.time
      // check data before send
      vm.$store.dispatch('CHILD_ADD_ACTION', JSON.parse(JSON.stringify(vm.newChildInfo))).then(()=>{

        vm.newChildInfo =  {
              user_id: vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id,
              baby_name: '',
              baby_gender: 1,
              baby_birth: '',
            }
            setTimeout(()=>{

              const modalPayload = {
                selector:'#addChildModal',
              }

              vm.$store.dispatch('TOGGLE_SIMPLE_POPUP',modalPayload)
              vm.$store.state.baby.CHILD_ADD_ERRORS = undefined
              vm.$store.dispatch('CHILD_GET_ALL',vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id)

            },2000)
      })
    }

    $addChildForm.form({
      fields: addChildRules,
      onSuccess: addChildAction
    })

    $('#addChildModal .selection.dropdown').dropdown({
     onChange: function(val) {
        vm.newChildInfo.baby_gender = val
     }
    })
  }
}
</script>

<style lang="css">
</style>
