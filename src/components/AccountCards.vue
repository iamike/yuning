<template lang="html">
  <div class="ui segment basic">
    <h2 class="ui header teal"><i class="icon list"></i>卡片列表</h2>

    <div class="ui top attached tabular menu" id="cardList">
      <a class="item active" data-tab="act">未使用的卡片</a>
      <a class="item" data-tab="used">已使用的卡片</a>
    </div>
    <div class="ui bottom attached tab segment active" data-tab="act">
      <div class="ui cards centered">
        <card v-for="item in ACCOUNT_CARD_LIST_ACTIVE" :card-info="item"></card>
      </div>
    </div>
    <div class="ui bottom attached tab segment" data-tab="used">
      <div class="ui cards centered">
        <card v-for="item in ACCOUNT_CARD_LIST_USED" :card-info="item"></card>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Card from './Card'

export default {
  name: 'card-list',
  components: {
    Card,
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['ACCOUNT_CARD_LIST_ACTIVE','ACCOUNT_CARD_LIST_USED'])
  },
  created () {
    // console.log('card list for',this.$store.state.userRegLog.USER_SIGN_IN_INFO.id)
    this.$store.dispatch('ACCOUNT_GET_CARDS',{user_id:this.$store.state.userRegLog.USER_SIGN_IN_INFO.id}).then((res)=>{
        $('#cardList .item').tab()
    })

  },
  mounted () {
    // console.log($('.menu .item'))


  }
}
</script>

<style lang="css">
</style>
