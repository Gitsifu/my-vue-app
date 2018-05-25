<template>
  <div>
    <div>Hello {{username}}</div>
    <div>个人介绍：{{description}}</div>
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
