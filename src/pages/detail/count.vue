<template>
  <div>
    <a>count</a>
    <button @click="buy">购买</button>
    <my-dialog :is-show="isShowDialog" @on-close="closeDialog">
      <table>
      <thead>
      <tr>
        <td>序号</td>
        <td>价格</td>
      </tr>
      </thead>
       <tbody>
       <tr>
         <td>1</td>
         <td>{{price.amount}}</td>
       </tr>
       </tbody>
     </table>
      请选择：
      <button @click="sureBuy">确认购买</button>
    </my-dialog>

    <check-order :isShowCheckDialog="isShowCheckDialog" @on-close-check="closeCheck" :orderId="orderId">
      订单编号：{{orderId}}
    </check-order>

    <my-dialog :is-show="isShowErrorDialog" @on-close="closeErrorDialog">
      支付失败
    </my-dialog>

  </div>
</template>

<script>
  import _ from 'lodash';
  import Dialog from '../../components/base/dialog.vue';
  import CheckOrder from '../../components/checkOrder.vue'
  export default {
    data: function () {
      return {
        buyNumber: '',
        buyType: '',
        versions: [
          {
            value:'2'
          },
          {
            value:'1.2'
          }
        ],
        period: '',
        price:'',
        isShowDialog:false,
        isShowCheckDialog:false,
        isShowErrorDialog:false
      }
    },
    components:{
      myDialog:Dialog,
      checkOrder:CheckOrder
    },
    mounted:{
      //渲染完
    },
    methods: {
      getPrice:function(){
        var buyVersion = _.map(this.versions,function(item){
          return item.value;
        })
        var params ={
          buyNumber:this.buyNumber,
          buyType:this.buyType,
          version:buyVersion.join(','),
          period:this.period
        }

        this.$http.post('/api/getPrice',params).then(function(data){
            if(data.status == '200'){
              this.price = data.data
            }
        })
      },
      buy:function(){
        this.isShowDialog = true;
        this.getPrice();
      },
      closeDialog:function(){
        this.isShowDialog = false;
      },
      closeErrorDialog:function(){
        this.isShowErrorDialog = false;
      },
      sureBuy:function(){
        this.$http.get('/api/createOrder').then(function(data){
          if(data.status == '200'){
            this.orderId = data.data.orderId;
            this.isShowDialog = false;
            this.isShowCheckDialog = true;
          }
        },function(){
          this.isShowDialog = false;
          this.isShowErrorDialog = true;
        });
      },
      closeCheck:function(){
        this.isShowCheckDialog = false;
      }
    }
  }

</script>
<style lang="less">

</style>
