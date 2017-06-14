<template>
  <div>
      <div class="info-header">
        <h4>登录</h4>
      </div>
      <div class="search-classify">
        <div class="classify-item fl">
          <label>账号：</label>
          <div class="input">
            <input type="text"  placeholder="请输入用户名" v-model="username">
            <span class="error">{{userErrors.errorText}}</span>
          </div>
        </div>
        <div class="classify-item fl ml30">
          <label>密码：</label>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password"/>
            <span class="error">{{passwordErrors.errorText}}</span>
          </div>
        </div>
      </div>
      <button class="borderCheck" @click="onLogin">登录</button>
      <p class="error allError">{{errorText}}</p>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        username:'',
        password:'',
        errorText:""
      }
    },
    computed:{
      userErrors:function(){
        var errorText,status;
        if(!/@/g.test(this.username)){
          status = false;
          errorText = '不包含@'
        }else{
          status = true;
          errorText = ''
        }
        if(!this.userFlag){
          errorText = ''
          this.userFlag = true;
        }
        return {"status":status,"errorText":errorText}
      },
      passwordErrors:function(){
        var errorText,status;
        if(!/^\w{1,6}$/.test(this.password)){
          status = false;
          errorText = '密码不是1-6位'
        }else{
          status = true;
          errorText = ''
        }
        if(!this.passwordFlag){
          errorText = ''
          this.passwordFlag = true;
        }
        return {"status":status,"errorText":errorText}
      }
    },
    methods: {
      onLogin: function () {
        var me = this;
        if( me.userErrors.status && me.passwordErrors.status ){
          this.errorText = '';
          me.$http.post('/api/login',{username:me.username,password:me.password}).then(function(res){
            if (res.status == '200') {
              this.$emit('has-log',me.username)

            }
          },function(error){
            console.log(error);
          });
        }else{
         this.errorText="部分选项未通过";
        }
      }
    }
  }

</script>
<style lang="less" scoped>
  button {
    width: 40px;
    height: 38px;
    line-height: 38px;
    margin-top: 30px;
    font-size: 12px;
  }
  .allError{
    position: absolute;
    right: 86px;
    top: 62px;
    text-align: right;
    color:#617083
  }
</style>
