<template>
  <div class="ui borderless main menu">
    <div class="ui text container">
      <div href="#" class="header item">
        <img src="../assets/images/logo.png" alt="brand" class="logo" />
      </div>
      <primaryNav></primaryNav>
    </div>
  </div>
</template>

<script>
import PrimaryNav from './PrimaryNav'

export default {
  name: 'app-header',
  components: {
    PrimaryNav
  }
}
</script>

<style lang="css">

</style>
