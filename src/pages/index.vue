<template>
    <div class="index-wrap">
      <div class="index-left">
        <div class="index-left-block">
          <h2>全部产品</h2>
          <h3>PC产品</h3>
          <ul>
            <li v-for="item in productList.game">
              <a :href="item.url">{{item.name}}</a>
            </li>
          </ul>
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
                game:[
                  {
                    name:"aa",
                    url:'1'
                  },
                  {
                    name:"bb",
                    url:''
                  }
                ],
                app:[
                  {
                    url:"11",
                    name:''
                  },
                  {
                    url:"122",
                    name:''
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
</style>
