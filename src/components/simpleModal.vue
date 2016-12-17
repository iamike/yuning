<template lang="html">
  <div class="ui modal">
    <i class="close icon"></i>
    <slot name="header">
      <div class="header">
      </div>
    </slot>
    <slot name="content">
      <div class="image content">
      </div>
    </slot>
    <slot name="actions">
      <div class="actions">
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'simple-modal',

}
</script>

<style lang="css">
</style>
