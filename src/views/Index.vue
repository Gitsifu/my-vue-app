<template>
  <div>
    <div>
      这是index页面
    </div>
    <button v-if="this.$ROLE_MAP['1'] === role">这个按钮只有admin用户才能看到</button><br>
    <router-link :to="{path: '/hello'}">只有admin用户才能访问</router-link>
  </div>
</template>

<script>
  export default {
    name: 'index',
    components: {},
    props: [],
    data() {
      return {
        role: sessionStorage.role
      }
    },
    methods: {},
    mounted() {

    }
  }
</script>

<style scoped>

</style>
