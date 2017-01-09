<template lang="html">
  <div>
    <div class="ui container payment">
      <div class="ui two column grid">
      <div class="column">
        <h2 class="ui header green">
          <i class="payment icon"></i>
          <div class="content">
            结算中心
          </div>
        </h2>
      </div>
      <div class="column">
        <steps :steps="steps" :currentSteps="active" aligned="right"></steps>
      </div>
    </div>
    <div class="ui divided items">
      <div class="item">
        <div class="ui tiny image">
          
        </div>
        <div class="middle aligned content">
          Content A
        </div>
      </div>
      <div class="item">
        <div class="ui tiny image">

        </div>
        <div class="middle aligned content">
          Content B
        </div>
      </div>
      <div class="item">
        <div class="ui tiny image">

        </div>
        <div class="middle aligned content">
          Content C
        </div>
      </div>
    </div>

  </div>


  </div>
</template>

<script>

import Steps from './Steps'


export default {
  name:'payment',
  components: {
    Steps,
  },
  data () {
    return {
      active: 0,
      steps: [
        {'name':'确认定单'},
        {'name':'支付定单'},
        {'name':'定单完成'},
      ]
    }
  },
  mounted () {
    // let vm = this
    // setInterval(function(){
    //   vm.active = vm.active+1
    // },3000)
  },

}
</script>

<style lang="scss" scoped>
.header {
  font-weight: normal;
}
.mainContent {
  background-color: #f5f5f5;
  padding-top: 10rem;
  min-height: 86vh;

  @media only screen and (max-width: 700px) {
    padding-top: 44px;
  }
}

</style>
