<template lang="html">
  <div class="ui basic modal">
    <i class="close icon"></i>
    <div class="header">
      <slot name='header'></slot>
    </div>
    <div class="image content">
      <div class="image">
        <i class="archive icon"></i>
      </div>
      <div class="description">
        <slot name='description'>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</slot>
      </div>
    </div>
    <div class="actions">
      <slot name='actions'>
        <div class="two fluid ui inverted buttons">
          <div class="ui cancel red basic inverted button">
            <i class="remove icon"></i>
            No
          </div>
          <div class="ui ok green basic inverted button">
            <i class="checkmark icon"></i>
            Yes
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basic-modal',
}
</script>

<style lang="css">
</style>
