<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <div class="head-nav">
          <ul>
            <li>{{username}}</li>
            <li v-if="username == '' " @click="login">登录</li>
            <li v-if="username == '' " @click="register">注册</li>
            <li @click="aboutDia">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      copyRight
    </div>
    <my-dialog :is-show="isShowDialog" @on-close="closeDialog">
      <keep-alive>
        <!--//:is 动态绑定组件-->
        <div :is="currentDialog" :data="dialogCon" @has-log="successLog"></div>
      </keep-alive>
    </my-dialog>
  </div>
</template>
<script>
  import Dialog from './dialog.vue';
  import Login from './login.vue';
  import Register from './register.vue';
  import About from './about.vue';
  export default {
    data: function () {
      return {
        isShowDialog: false,
        aboutCon:'',
        currentDialog:"",
        dialogCon:'',
        username:''
      }
    },
    components: {
      myDialog: Dialog,
      loginCom:Login,
      registerCom:Register,
      aboutCom:About
    },
    computed:{

    },
    methods: {
      login: function () {
        this.dialogCon ='';
        this.currentDialog = "loginCom";
        this.isShowDialog = true;
      },
      register: function () {
        this.dialogCon ='';
        this.currentDialog = "registerCom";
        this.isShowDialog = true;
      },
      aboutDia: function () {
        this.dialogCon = this.aboutCon;
        this.currentDialog = "aboutCom";
        this.isShowDialog = true;
      },
      closeDialog:function(){
        this.isShowDialog = false;
      },
      successLog:function(data){
        this.username = data;
        this.isShowDialog = false;
      }
    },
    created:function(){
      var me = this;
      me.$http.get('/api/about').then(function (response) {
        if (response.status == '200') {
          me.aboutCon = response.body
        }
      })
    }
  }

</script>
<style lang="less">
  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .app-head-inner {
    height: 70px;
    background: #000000;
    color: #FFF;
    line-height: 70px;
    overflow: hidden;
  }

  .head-nav {
    float: right;

  ul {
    list-style: none;
    margin: 0;
    overflow: hidden;

  li {
    float: left;
    margin: 0 10px 0 10px;
    cursor: pointer;
  }

  }
  }
  .app-footer {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
</style>
