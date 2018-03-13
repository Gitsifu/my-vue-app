<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click="demo">提交</div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      demo:function () {
        this.$HTTP.asyncGet('',{},function (res) {

        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
