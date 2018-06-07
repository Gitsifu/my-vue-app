<template>
    <div>
      <div>简单示例</div>
      <router-link to="/example/img-upload">图片裁剪并上传</router-link>
      <router-link to="/example/vm-markdown">markdown</router-link>
      <router-link to="/example/charts">图表</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'example-container',
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
