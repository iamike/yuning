<template lang="html">
  <div class="ui vertical pointing menu">
    <router-link :to="{name:'accountInfo'}" class="item">帐户金额</router-link>
    <router-link :to="{name:'charge'}" class="item">激活卡</router-link>
    <router-link :to="{name:'myCards'}" class="item">我的卡包<div class="ui label">2</div></router-link>
    <router-link :to="{name:'consultRecorder'}" class="item">轻咨询记录</router-link>
    <router-link :to="{name:'trainingRecorder'}" class="item">多元智能训练记录</router-link>
  </div>
</template>

<script>
export default {
  name: 'account-sidebar'

}
</script>

<style lang="css">
</style>
