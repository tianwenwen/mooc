<template>
  <div>
    <my-dialog :is-show="isShowCheckDialog" @on-close="changeStatus">
      请检查你的支付状态
      <slot></slot>
      <button @click="checkStatus">支付成功</button>
      <button @click="checkStatus">支付失败</button>
    </my-dialog>
    <my-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">
      购买成功
    </my-dialog>
    <my-dialog :is-show="isShowFailDialog" @on-close="toOrderList">
      购买失败
    </my-dialog>
  </div>
</template>

<script>
  import Dialog from './base/dialog.vue';
  export default {
    props:{
      isShowCheckDialog:{
        type:Boolean,
        default:false
      },
      orderId:{
        type:[String,Number]
      }
    },
    data: function () {
      return {
        isShowCheckDialog:false,
        isShowSuccessDialog:false,
        isShowFailDialog:false
      }
    },
    components: {
      myDialog: Dialog
    },
    methods: {
      changeStatus: function () {
        this.$emit('on-close-check');
      },
      checkStatus: function () {
        var reqParams ={
          orderId:this.orderId
        };
         this.$http.post('/api/checkStatus',reqParams).then(function(data){
           this.isShowSuccessDialog = true;
           this.$emit('on-close-check');
         },function(){
           this.isShowFailDialog = true;
           this.$emit('on-close-check');
         });
      },
      toOrderList:function(){
        this.$router.push({path:'/orderList'}) //使用push进行跳转，和router-link to的是一样的
      }
    }
  }

</script>
<style lang="less">

</style>
