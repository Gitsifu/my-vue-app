<template>
  <div>
    <button @click="demo">test</button>
  </div>
</template>

<script>
  import Bus from './bus'
  export default {
    name: 'sun1',
    components: {},
    props: [],
    data() {
      return {}
    },
    methods: {
      demo() {
        Bus.$emit('test', "通过事件总线的方式，在姊妹关系组件间传递数据");
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
