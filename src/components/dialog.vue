<template>
  <div>
    <div class="dialog-wrap">
      <div class="dialog-cover" v-if="isShow" @click="closeDialog"></div>
      <transition name="drop">
        <div class="dialog-content" v-if="isShow">
          <p class="dialog-close" @click="closeDialog">&otimes;</p>
          <slot>empty</slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isShow:{
        type:Boolean,
        default:false
      }
    },
    data: function () {
      return {}
    },
    methods:{
      closeDialog:function(){
        this.$emit('on-close')
      }
    }
  }

</script>
<style lang="less">
  .drop-enter-active{
    transition:all .5s ease;
  }
  .drop-leave-active{
    transition:all .4s ease;
  }
  .drop-enter{
    transform:translateY(-500px);
  }
  .drop-leave-active{
    transform: translateY(-500px);
  }
  .dialog-wrap{
    position:relative;
    width: 100%;
    height: 100%;
  }
  .dialog-cover{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background:#000;
    opacity:.3;
  }
  .dialog-content{
    width: 50%;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background: #FFF;
    top:20%;
    left: 50%;
    margin-left:-25%;
    z-index:10;
    border:2px solid #464068;
    padding:2%;
    line-height:1.6;
    padding-bottom:45px;
  }
  .dialog-close{
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    font-size: 28px;
    color: blue;
    padding: 0;
    margin: 0;
    line-height: 30px;
  }
</style>
