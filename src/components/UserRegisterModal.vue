<template lang="html">
  <simple-modal>
    <div class="header" slot="header">
      用户注册
    </div>
    <div class="ui segment padded basic" slot="content">
        <div class="ui one column middle aligned very relaxed stackable grid">
          <div class="column">
            <user-register-form></user-register-form>
          </div>
        </div>
    </div>
  </simple-modal>
</template>

<script>
import SimpleModal from './SimpleModal'
import UserRegisterForm from './UserRegisterForm'

export default {
  name: 'user-register-modal',
  components: {
    UserRegisterForm,
    SimpleModal,
  }
}
</script>

<style lang="css">
</style>
