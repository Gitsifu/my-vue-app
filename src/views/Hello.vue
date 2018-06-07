<template>
  <div>
    <div>Hello {{username}}</div>
    <div>个人介绍：{{description}}</div>
    <button @click="demo">发送</button>
  </div>
</template>

<script>


  export default {
    name: 'hello',
    components: {},
    props: [],
    data() {
      return {
        username: '',
        description: ''
      }
    },
    methods: {
      demo() {
        this.$HTTP.post(this.$API.demo, {username: 'sifu', age: '19'}, function (res) {

        })
      }
    },
    mounted() {
      let that = this;
      this.$HTTP.get(this.$API.userInfo, {}, function (res) {
        that.username = res.username;
        that.description = res.description;
      })
    }
  }
</script>

<style scoped>

</style>
