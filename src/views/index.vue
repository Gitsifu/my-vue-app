<template>
  <div>
    <div>
      这是index页面
    </div>
    <router-link :to="{path: '/hello'}">只有admin用户才能访问</router-link>
  </div>
</template>

<script>
  export default {
    name: 'index',
    components: {},
    props: [],
    data() {
      return {}
    },
    methods: {},
    mounted() {

    }
  }
</script>

<style scoped>

</style>
