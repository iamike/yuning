<template lang="html">
  <div class="ui two column centered grid profile-list stackable">

      <div class="column" v-if="CHILD_GET_ALL==undefined" >
        <div class="ui icon message">
          <i class="notched circle loading icon"></i>
          <div class="content">
            <div class="header">
              没有查询到您的孩子信息
            </div>
            <p>请按添加新宝宝按钮.</p>
          </div>
        </div>
      </div>

    <user-baby-card-item v-for="child in CHILD_GET_ALL" v-bind:baby-info="child" ></user-baby-card-item>

    <div class="row">
      <div class="column right floated">
        <div class="ui action">
          <div class="ui orange button right floated" @click="toggleAddChildPopup('#addChildModal')">
            <i class="add icon"></i> 添加新宝宝
          </div>
        </div>
      </div>
    </div>

    <simple-modal id="addChildModal">
      <div class="header" slot="header">
        添加宝贝信息
      </div>

      <div class="content" slot="content">

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
              <div class="ui black deny button">
                取消
              </div>
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
      </div>
      <div class="actions invisible" slot="actions" style="border:none;" >
      </div>
    </simple-modal>

    <simple-modal id="modifyChildModal">
      <div class="header" slot="header">
        修改宝贝信息
      </div>
      <div class="content" slot="content">

      </div>
      <div class="actions" slot="actions">
        <div class="ui black deny button">
          取消
        </div>
        <div class="ui positive right labeled icon button submit">
          完成，提交
          <i class="checkmark icon"></i>
        </div>
      </div>
    </simple-modal>

    <basic-modal id="removeChildModal">
      <div class="header ui icon" slot="header">
        <i class="archive icon"></i>
        删除宝贝资料？
      </div>
      <div class="ui equal width center aligned grid" slot="content">
        <div class="row">
          <div class="column">
              此操作将删除该孩子的信息，请谨慎操作！
          </div>
        </div>
      </div>
        <div class="actions ui equal width center aligned grid" slot="action">
          <div class="ui cancel red inverted button">
            <i class="remove icon"></i>
            取消
          </div>
          <div class="ui ok green inverted button">
            <i class="checkmark icon"></i>
            确定
          </div>
        </div>
    </basic-modal>
  </div>
</template>

<script>
import UserBabyCardItem from './UserBabyCardItem'
import Modal from './Modal'
import BasicModal from './BasicModal'
import SimpleModal from './SimpleModal'
import myDatepicker from 'vue-datepicker'

import { mapGetters, mapActions} from 'vuex'


export default {
  name: 'user-baby-card-list',
  components: {
    UserBabyCardItem,
    BasicModal,
    SimpleModal,
    'date-picker': myDatepicker,
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
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
      },
    }
  },
  methods:{
    toggleAddChildPopup (selector) {
      let vm = this
      const modalPayload = {
        selector,
      }

      this.$store.dispatch('TOGGLE_SIMPLE_POPUP',modalPayload)
      // TOGGLE_SIMPLE_POPUP('#addChildModal')
    },
    ...mapActions(['TOGGLE_SIMPLE_POPUP'])
  },
  computed: {
    ...mapGetters(['CHILD_GET_ALL','CHILD_ADD_ERRORS'])
  },
  created () {
    // GET ALL CHILDS INFOMATION FROM THE DATABASE THROUGH THE API CALL
    this.$store.dispatch('CHILD_GET_ALL', this.$store.state.userRegLog.USER_SIGN_IN_INFO.id)
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

    $('.selection.dropdown').dropdown({
     onChange: function(val) {
        vm.newChildInfo.baby_gender = val
     }
    })

  }
}
</script>

<style lang="scss">
.cov-vue-date {
  width: 100%;
}
#addChildModal {
.ui.form {
    padding-top: 0px;
  }
  .actions {
    background-color: #fff;
  }
}
</style>
