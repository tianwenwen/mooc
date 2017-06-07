<template>
    <div class="index-wrap">
      <div class="index-left">
        <div class="index-left-block">
          <h2>全部产品</h2>
          <div v-for="(item,index) in productList.list">
            <h3>{{item.title}}</h3>
            <ul>
            <li v-for="items in item.list">
            <a :href="items.url">{{items.title}}</a>
            </li>
            </ul>
          </div>
        </div>
        <div class="index-left-block">
          <h2>最新消息</h2>
          <div v-for="(item,index) in messageList.list">
            <h3>{{item.title}}</h3>
            <ul>
              <li v-for="items in item.list">
                <a :href="items.url">{{items.title}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="index-right">
        <div class="index-board-list" v-for="(item,index) in boardList" :class="['index-board-'+index,{'line-last':(index+1)%2 ===0}]">
          <div class="index-board-item-inner">
            <h2>{{index+1}} {{item.title}}</h2>
            <p>{{item.description}}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{path:'detail'}">立刻购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
        data: function () {
            return {
              productList:{
                list:[
                  {
                    title:'PC产品',
                    list:[
                      {
                        title:'数据统计',
                        url:"",
                      },
                      {
                        title:'数据预测',
                        url:"",
                      },
                      {
                        title:'流量分析',
                        url:"",
                      }
                    ]
                  },{
                    title:'手机应用类',
                    list:[
                      {
                        title:'产品助手',
                        url:"",
                      },
                      {
                        title:'智慧地图',
                        url:"",
                      },
                      {
                        title:'团副语言',
                        url:"",
                      }
                    ]
                  }
                ]
              },
              messageList:{
                list:[
                  {
                    title:'',
                    list:[
                      {
                        title:'广告发布',
                        url:''
                      }
                    ]
                  }
                ]
              },
              boardList:[
                {
                  title:'fff',
                  description:"fffffffff",
                },
                {
                  title:'fff',
                  description:"fffffffff",
                },
                {
                  title:'fff',
                  description:"fffffffff",
                },
                {
                  title:'fff',
                  description:"fffffffff",
                },
                {
                  title:'fff',
                  description:"fffffffff",
                }
              ]
            }
        }
    }

</script>
<style lang="less" scoped>
  .index-wrap{
    overflow: hidden;
  }
  .index-left{
    float: left;
    width: 200px;
    border-right:1px solid #efefef;
  }
  .index-right{
    margin-left:200px;
  }
  .line-last{
    background: #efefef;
  }
  .index-left-block{
    h2{
      height: 40px;
      color:#fff;
      line-height: 40px;
      background: #008800;
    }
  }
</style>
