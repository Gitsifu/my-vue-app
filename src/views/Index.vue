<template>
  <div>
    <div>
      这是index页面
    </div>
    <button v-if="this.$ROLE_MAP['1'] === role">这个按钮只有admin用户才能看到</button><br>
    <router-link :to="{path: '/hello'}">只有admin用户才能访问</router-link><br>

    <router-link :to="{path: '/example'}">简单例子</router-link>
    <div>下面是mint-ui的按钮组件</div>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
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
