<template lang="html">
  <simple-modal>
    <div class="header" slot="header">
      用户更新手机
    </div>
    <div class="content" slot="content">
      <div class="ui steps">
        <div class="step">
          <i class="mobile icon"></i>
          <div class="content">
            <div class="title">核实旧手机</div>
            <div class="description">158****9393</div>
          </div>
        </div>
        <div class="active step">
          <i class="mobile icon"></i>
          <div class="content">
            <div class="title">核实新手机</div>
            <div class="description">输入您的新手机号</div>
          </div>
        </div>
        <div class="disabled step">
          <i class="info icon"></i>
          <div class="content">
            <div class="title">完成</div>
          </div>
        </div>
      </div>
    </div>
  </simple-modal>
</template>

<script>
import SimpleModal from './SimpleModal'

export default {
  name: 'user-mobile',
  components: {
    SimpleModal,
  }
}
</script>

<style lang="css">
</style>
