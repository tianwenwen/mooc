<template>
    <div class="index-wrap">
      <div class="index-left">
        <div class="index-left-block">
          <h2>全部产品</h2>
          <template v-for="(product,index) in productList.list">
            <h3>{{product.title}}</h3>
            <ul>
            <li v-for="item in product.list">
              <router-link :to="item.url">{{item.title}}</router-link>
            </li>
            </ul>
            <hr v-if="index !=  productList.list.length-1">
          </template>
        </div>
        <div class="index-left-block">
          <h2>最新消息</h2>
          <template v-for="(news,index) in newsList.list">
            <h3>{{news.title}}</h3>
            <ul>
              <li v-for="item in news.list">
                <router-link :to="item.url">{{item.title}}</router-link>
              </li>
            </ul>
          </template>
        </div>
      </div>
      <div class="index-right">
        <router-view></router-view>
        <div class="index-board-list" v-for="(board,index) in boardList" :class="['index-board-'+index,{'line-last':(index+1)%2 ===0}]">
          <div class="index-board-item-inner">
            <h2>{{index+1}} {{board.title}}</h2>
            <p>{{board.description}}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{name:'buy', params:{id: board.id }}">立刻购买</router-link>
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
              productList:{},
              newsList:{},
              boardList:[]
            }
        },
      created:function(){
        this.$http.get('/api/productList').then(function(response){
          if(response.status == '200'){
            this.productList = response.body
          }

        }),
          this.$http.get('/api/newsList').then(function(response){
            if(response.status == '200'){
              this.newsList = response.body;
            }

          }),
          this.$http.get('/api/boardList').then(function(response){
            if(response.status == '200'){
              this.boardList = response.body;
            }
          })

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
