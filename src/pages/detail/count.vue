<template>
  <div>
    <a @click="getPrice">count</a>
    {{price.amount}}
  </div>
</template>

<script>
  import _ from 'lodash'
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
        price:''
      }
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
      }
    }
  }

</script>
<style lang="less">

</style>
