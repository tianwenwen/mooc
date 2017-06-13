<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="sliders[nowIndex].href">
        <transition name="slide-trans">
          <img :src="sliders[nowIndex].src" alt="" v-if="isShow">
        </transition>
        <transition name="slide-trans-old">
          <img :src="sliders[nowIndex].src" alt="" v-if="!isShow">
        </transition>
      </a>
    </div>
    <h2>{{sliders[nowIndex].title}}</h2>
    <div class="slide-pages">
      <ul>
        <li><a @click="goto(prevIndex)">&lt;</a></li>
        <li v-for="(item,index) in sliders">
          <a @click="goto(index)" :class="{'active':index === nowIndex}">{{index+1}}</a>
        </li>
        <li><a @click="goto(nextIndex)">&gt;</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      sliders: {
        type: Array,//类型
        default: []//初始值
      },
      inv:{
        type:Number,
        default:1000
      }
    },
    data: function () {
      return {
        nowIndex: 0,
        isShow:true
      }
    },
    mounted: function () {
      this.runInv();
    },
    computed:{
      prevIndex:function(){
        return (this.nowIndex == 0 ? this.sliders.length-1:this.nowIndex-1)
      },
      nextIndex:function(){
       return (this.nowIndex == this.sliders.length-1 ? 0:this.nowIndex+1)
      }
    },
    methods: {
      goto: function (index) {
        var me = this;
        me.isShow = false;
        setTimeout(function(){
          me.isShow = true;
          me.nowIndex = index;
        });
      },
      runInv:function(){
        var me = this;
        me.invId = setInterval(function(){
          console.log('ff');
          me.goto(me.nextIndex);
        },me.inv);
      },
      clearInv:function(){
        clearInterval(this.invId);
      }
    }
  }

</script>
<style lang="less" scoped>
  .slide-trans-enter-active {
    transition: all .5s;
  }

  .slide-trans-enter {
    transform: translateX(900px);
  }

  .slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-900px);
  }

  ul,h2 {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .slide-show {
    width: 900px;
    height: 350px;
    overflow: hidden;
    margin: 15px 15px 0;
    position: relative;

  h2 {
    position: absolute;
    color: #FFF;
    background: #000;
    width: 100%;
    opacity: .5;
    bottom: 0;
    left:0;
    line-height: 40px;
    text-align: left;
    padding-left: 15px;
  }

  }
  .slide-img {
    width: 100%;

  img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  }
  .slide-pages {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 100%;
    background: #000;
    opacity: .5;

  ul {
    float: right;
    margin-right: 20px;
  }

  li {
    float: left;

  a {
    color: #fff;
    font-size: 12px;
    line-height: 40px;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  .active {
    color: red;
  }

  }
  }
</style>
