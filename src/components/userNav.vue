<template lang="html">
  <div class="ui tabular menu ">
    <router-link class="item" :to="{ name: 'profile' }">个人资料</router-link>
    <router-link class="item" :to="{ name: 'account' }">帐户资料</router-link>
    <router-link class="item" :to="{ name: 'order' }">订单资料<div class="floating ui red label">22</div></router-link>

    <!-- <div class="right menu">
      <div class="item">
        <div class="ui transparent icon input">
          <input type="text" placeholder="Search...">
          <i class="search link icon"></i>
        </div>
        <div class="ui breadcrumb">
          <a class="section">Home</a>
          <i class="right angle icon divider"></i>
          <a class="section">Store</a>
          <i class="right angle icon divider"></i>
          <div class="active section">T-Shirt</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'user-nav'
}
</script>

<style lang="scss" scoped>
.tabular.menu {
  margin-bottom: 3rem;
}
</style>
