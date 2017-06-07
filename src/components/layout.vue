<template>
    <div>
      <div class="app-head">
          <div class="app-head-inner">
            <div class="head-nav">
              <ul>
                <li>登录</li>
                <li>注册</li>
                <li>关于</li>
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
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {}
        },
        components: {}
    }

</script>
<style lang="less">
  body,html{
    height: 100%;
    margin:0;
    padding:0;
  }
  .app-head-inner{
    height: 70px;
    background: #000000;
    color:#FFF;
    line-height:70px;
    overflow: hidden;
  }
  .head-nav{
    float: right;
    ul{
      list-style:none;
      margin:0;
      overflow:hidden;
      li{
        float: left;
        margin:0 10px 0 10px;
        cursor: pointer;
      }
    }
  }
  .app-footer{
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
</style>
