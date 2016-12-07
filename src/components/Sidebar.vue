<template lang="html">
  <div id="sidebar" class="ui vertical sidebar menu right inverted">
    <a class="active item">Home</a>
    <a class="item">Work</a>
    <a class="item">Company</a>
    <a class="item">Careers</a>
    <a class="item">Login</a>
    <a class="item">Signup</a>
  </div>
</template>
<script>


export default {
  name: 'sidebar',
  mounted () {
    $('.ui.sidebar').sidebar('attach events', '.toc.item')
  }
}
</script>
