<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="demo">提交</button><br>
    <router-link :to="{path: '/hello'}">to</router-link>
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
        this.$HTTP.get('user',{},function (res) {

        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
