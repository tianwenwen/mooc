<template>
  <div>
     <a @click="productChange({'val':'44'})">order list</a>
    <ul>
      <li v-for="value in tableData">
        <span>{{value}} </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        productId:'555'
      }
    },
    computed:{
      tableData:function(){
        return this.$store.getters.getOrderList; //第一步 通getters把store的数据关联到页面
      }
    },
    mounted:function(){
      this.$store.commit('updatePrams',{
        key:'productId',
        val:'3'
      });
      this.$store.dispatch('fetchOrderList');//第二步 主动调用action
      console.log(this.$store);
    },
    methods:{
      productChange:function(obj){
        this.$store.commit('updatePrams',{
          key:'productId',
          val:obj.val
        });
        this.$store.dispatch('fetchOrderList');
      }
    }
  }

</script>
<style lang="less">

</style>
