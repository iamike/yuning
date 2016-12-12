<template lang="html">
  <div class="ui grid">
    <div class="sixteen wide column">
      <div class="ui piled segment raised ">
        <a class="ui red ribbon label"><i class="settings icon"></i> 修改密码</a>

        <form class="ui form">
          <div class="fields">
            <div class="field">
              <label>新密码</label>
              <input type="password" name="newPassword" placeholder="">
            </div>
            <div class="field">
              <label>验证码</label>
              <input type="text" name="verifyCode" placeholder="">
            </div>
          </div>

          
          <button class="ui button red" type="submit">提交</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

</style>
