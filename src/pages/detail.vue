<template>
    <div class="detail-wrap">
      <div class="detail-left">
        <div class="product-board">
          <img :src="prodectIcon">
          <ul>
            <!--active-class 页面定位到当前位置时激活样式-->
            <router-link v-for="item in products" :to="{path:item.path}" tag="li" active-class="active">
              {{item.name}}
            </router-link>
          </ul>
        </div>
      </div>
      <div class="detail-right">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              products:[
                {
                  name:'数据统计',
                  path:"count",
                  active:'false',
                  icon:require('../assets/icon_flag.png')
                },
                {
                  name:'数据预测',
                  path:"forecast",
                  active:'false',
                  icon:require('../assets/icon_back.png')
                },
                {
                  name:'流量分析',
                  path:"analysis",
                  active:'false',
                  icon:require('../assets/logo.png')
                },
                {
                  name:'广告发布',
                  path:"publish",
                  active:'false',
                  icon:require('../assets/icon_back.png')
                }
              ],
              imgMap:{
                "/detail/count":require('../assets/icon_flag.png'),
                "/detail/forecast":require('../assets/icon_back.png'),
                "/detail/analysis":require('../assets/logo.png'),
                "/detail/publish":require('../assets/icon_back.png')
              }
            }
        },
      computed:{
        prodectIcon:function(){
          return this.imgMap[this.$route.path]
        }
      }
    }

</script>
<style lang="less" scoped>
.detail-wrap{
  overflow: hidden;
}
  .detail-left{
    float: left;
    width: 200px;
    text-align: center;
  }
  .detail-right{
    float: left;
    width: 980px;
    margin-left:20px;
  }
  .product-board{
    background: #fff;
    padding:20px 0;
  img{
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
    ul{
      margin-top:20px;
      li{
        text-align:left;
        padding:10px 15px;
        cursor: pointer;
        &.active,&:hover{
          background: #4fc08d;
          color:#fff;
         }
      }
    }
  }
.sales-board{
  background:#fff;
}
.sales-board-intro{
  h2{
    font-size:20px;
    padding:20px;
  }
  p{
    background:#fff;
  }
}
.sales-board-line-right{
  display: inline-block;
  width: 75%;
}
  .sales-board-des{
    border-top:20px solid #f0f2f5;
  padding:15px 20px;
    h2{
      font-size:20px;
      padding-bottom: 15px;
    }
    p{
      line-height: 1.6;;
    }
    h3{
      font-size:18px;
      font-weight: bold;
      padding:20px 0 10px 0;
      li{
        padding:5px 0;
      }
    }
  }
.sales-board-table{
  width: 100%;
  margin-top:20px;
  th{
    background:#4fc08d;
    color:#fff;
  }
  td{
    border:1px solid #f0f2f5;
    padding:15px;
  }
}
</style>
