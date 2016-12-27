<template lang="html">
  <div class="menu" >
     <div class="item">
       <i class="dropdown icon"></i>
       <span class="text">轻咨询</span>
       <div class="menu">
         <div class="item">Unread</div>
         <div class="item">Promotions</div>
         <div class="item">Updates</div>
       </div>
     </div>
    <router-link class="item" :to="{name:'multiIntelligence'}">多元智能</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
</style>
