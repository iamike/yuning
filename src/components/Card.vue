<template lang="html">
  <div class="card "  v-bind:class="cardColor" >

    <span class="ui right corner label yellow" v-if="cardCate=='年卡' && cardInfo.status!='USED'">
      <i class="star icon"></i>
    </span>
    <span class="ui right corner label green" v-if="cardCate=='十天卡' && cardInfo.status!='USED'">
      <i class="calendar icon"></i>
    </span>
    <span class="ui right corner label teal" v-if="cardCate=='三天卡' && cardInfo.status!='USED'">
      <i class="time icon"></i>
    </span>
    <span class="ui right corner label blue" v-if="cardCate=='日卡' && cardInfo.status!='USED'">
      <i class="history icon"></i>
    </span>
    <span class="ui right corner label" v-if="cardInfo.status=='USED'">
      <i class="cut icon"></i>
    </span>

    <div class="content">
      <div class="header">{{cardCate}}</div>

      <div class="meta"><i class="icon barcode"></i>{{cardInfo.card_no}}</div>
      <div class="description">
        <i class="icon wait"></i>剩余时间: {{cardInfo.left_cnt}}
      </div>
    </div>
    <div class="extra content">
      <span class="left floated like">
        <i class="info icon"></i> 过期时间
        {{cardInfo.expire_date}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ['cardInfo'],
  data () {
    return {
      cardType:[{ en:'SSB_ANNUAL',cn:'年卡'},{ en:'SSB_ONE',cn:'日卡'},{en:'SSB_TRI',cn:'三天卡'},{ en:'SSB_TEN',cn:'十天卡'}],
    }
  },
  computed: {
    cardCate: function(){
      return this.cardType.filter(type => type.en == this.cardInfo.card_cat)[0]['cn']
    },
    cardColor: function() {
      if (this.cardInfo.status=='ACT') {
        if (this.cardInfo.card_cat=='SSB_ANNUAL') {
          return 'yellow'
        }

        if (this.cardInfo.card_cat=='SSB_TEN') {
          return 'green'
        }
        if (this.cardInfo.card_cat=='SSB_TRI') {
          return 'teal'
        }
        if (this.cardInfo.card_cat=='SSB_ONE') {
          return 'blue'
        }
      } else {
        return 'grey'
      }

    },
  }
}
</script>

<style lang="css">
</style>
