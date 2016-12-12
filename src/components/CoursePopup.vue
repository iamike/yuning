<template lang="html">
  <div id="coursePopup" class="ui fluid popup bottom center transition hidden">
   <div class="ui four column relaxed divided grid">
     <div class="column">
       <h4 class="ui header">课程</h4>
       <div class="ui link list">
         <a class="item">名师课程</a>
         <a class="item">名师介绍</a>
       </div>
     </div>
     <div class="column">
       <h4 class="ui header">直播</h4>
       <div class="ui middle aligned selection list">
        <div class="item">
          <img class="ui avatar image" src="../assets/images/avatar/small/helen.jpg">
          <div class="content">
            <div class="header">Helen</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="../assets/images/avatar/small/christian.jpg">
          <div class="content">
            <div class="header">Christian</div>
          </div>
        </div>
        <div class="item">
          <img class="ui avatar image" src="../assets/images/avatar/small/daniel.jpg">
          <div class="content">
            <div class="header">Daniel</div>
          </div>
        </div>
      </div>
     </div>
     <div class="column">
       <h4 class="ui header">心理</h4>
       <div class="ui link list">
         <a class="item">咨询</a>
         <a class="item">课程</a>
       </div>
     </div>
     <div class="column">
       <h4 class="ui header">其他</h4>
       <div class="ui link list">
         <a class="item">咨询</a>
         <a class="item">课程</a>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'course-popup',
  mounted () {
    $('.item.courseCenter')
      .popup({
        inline     : true,
        popup: '#coursePopup',
        // hoverable  : true,
        position   : 'bottom left',
        on: 'click',
        delay: {
          show: 300,
          hide: 800
        }
      })
  }
}
</script>

<style lang="css">
</style>
