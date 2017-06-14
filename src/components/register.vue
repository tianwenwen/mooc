<template>
    <div>
      <form action="">
        <div class="info-header">
          <h4>注册</h4>
        </div>
        <div class="search-classify">
          <div class="classify-item fl">
            <label>姓名：</label>
            <div class="input">
              <input type="text" id="parentName">
              <b class="redStar fl pa">*</b>
              <label for="" class="error none" data-type="parentName"></label>
            </div>
          </div>
          <div class="classify-item fl ml30">
            <label>手机号：</label>
            <div class="input">
              <input type="text" name="" id="telephone"/>
              <b class="redStar fl pa">*</b>
              <label for="" class="error none" data-type="telephone"></label>
            </div>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        }
    }

</script>
<style lang="less">

</style>
