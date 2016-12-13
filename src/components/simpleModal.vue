<template lang="html">
  <div class="ui modal">
    <i class="close icon"></i>
    <div class="header">
      <slot name="header">Profile Picture</slot>
    </div>
    <div class="image content">
      <div class="ui medium image">

      </div>
      <div class="description">
        <slot name="description">
          <div class="ui header">We've auto-chosen a profile image for you.</div>
          <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </slot>
      </div>
    </div>
    <div class="actions">
      <slot name="actions">
        <div class="ui black deny button">
          Nope
        </div>
        <div class="ui positive right labeled icon button">
          Yep, that's me
          <i class="checkmark icon"></i>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'simple-modal',

}
</script>

<style lang="css">
</style>
