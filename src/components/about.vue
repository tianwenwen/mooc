<template>
  <div>
    <h2>{{data.title}}</h2>
    <p>{{data.describe}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object
      }
    },
    data: function () {
      return {}
    }
  }

</script>
<style lang="less">

</style>
