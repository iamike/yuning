<template lang="html">
  <div id="sidebar" class="ui vertical sidebar menu right inverted">
    <a class="item" @click="links({ name: 'home' })" >首页</a>
    <a class="item" @click="links({name:'multiIntelligence'})">多元智能</a>

  </div>
</template>
<script>

export default {
  name: 'sidebar',
  methods: {
    links (link) {
      console.log(link)
      // this.$router.push(link)
    }
  },
  mounted () {
    $('.ui.sidebar').sidebar('attach events', '.toc.item')
  }
}
</script>
