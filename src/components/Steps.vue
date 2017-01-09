<template lang="html">
  <div class="ui segments ui-steps" v-bind:class="[aligned=='left'?'':'right']">
    <div class="ui horizontal segments">
      <div v-for="(item,index) in steps" class="ui segment basic item" v-bind:class="[index <= currentSteps?'active':'']">
        <div class="name">{{item.name}}</div>
        <label class="ui huge circular label"><b>{{index}}</b><i class="ui icon checkmark"></i></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'steps',
  props:['steps','currentSteps','aligned'],


}
</script>

<style lang="scss" scoped>
.ui.horizontal.segments>.segment {
  border-left: none;
}

.ui-steps {
  &.right {
    .item {
      text-align: right;
      .name {
        right:0px;
        left:auto;
      }
      &:before {
        right:0px;
        left:auto;
      }

      &:last-child {
        &:before {
          display: block;
        }
      }
      &:first-child {
        &:before {
          display: none;
        }
      }
    }

    .circular.label{
      margin-right: -2px;


    }
  }
  border:none;
  box-shadow: none;

  &>.segments {
    justify-content:space-between;

  }

  .item {

    &.active {

      .circular.label{
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#c9de96+0,8ab66b+44,8ab66b+44,398235+100 */
        background: #c9de96; /* Old browsers */
        background: -moz-radial-gradient(center, ellipse cover,  #c9de96 0%, #8ab66b 44%, #8ab66b 44%, #398235 100%); /* FF3.6-15 */
        background: -webkit-radial-gradient(center, ellipse cover,  #c9de96 0%,#8ab66b 44%,#8ab66b 44%,#398235 100%); /* Chrome10-25,Safari5.1-6 */
        background: radial-gradient(ellipse at center,  #c9de96 0%,#8ab66b 44%,#8ab66b 44%,#398235 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c9de96', endColorstr='#398235',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

        b {
          display: none;
        }
        i {
          display: block;
        }
      }
    }

    // flex: 0 1 auto!important;
    padding: 1em 0em;

    .name {
      position: absolute;
      left:0px;
      top:-1rem;
      color:#b1b1b1;
    }

    &:before {
      content: " ";
      position: absolute;
      width: 100%;
      height: 14px;
      background-color: #dcdcdc;

      top:50%;
      left:0px;
      margin-top: -7px;
    }

    &:last-child {
      &:before {
        display: none;
      }
    }
  }

  .circular.label{
    clear:both;
    border:6px solid #dcdcdc;
    background-color: #dcdcdc;
    position: relative;
    margin-left: -2px;
    color:#fff;
    position: relative;
    b {
      padding: 0px 4px;
      display: block;
    }
    i {
      display: none;
      margin: 0px;

    }
  }

  .progress {
    // display: none;
    height:1rem;
    border: none;

    .bar {
      height: 1rem;
    }
  }
}
</style>
