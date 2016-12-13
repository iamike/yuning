<template lang="html">
  <div class="ui basic modal">
    <slot name="header">
    <div class="header ui icon">
      <i class="archive icon"></i>
      删除宝贝资料？
    </div>
    </slot>
    <slot name="content">
      <div class="image content">
        <div class="description">
          <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
        </div>
      </div>
    </slot>

    <slot name="action">
    <div class="actions">
        <div class="ui cancel red inverted button">
          <i class="remove icon"></i>
          No
        </div>
        <div class="ui ok green inverted button">
          <i class="checkmark icon"></i>
          Yes
        </div>
    </div>
  </slot>

  </div>
</template>

<script>
export default {
  name: 'basic-modal',
}
</script>

<style lang="css">
</style>
