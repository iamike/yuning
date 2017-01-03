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

<style lang="css" scoped>
.logo{
  padding: 0em 2em 0em 0em;
  height: 80px;

  @media only screen and (max-width: 700px) {
    // float: right;
    transform: scale(0.5);
    padding: 0px;
    margin: 0px;
    display: none;
  }
}
</style>
