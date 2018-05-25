<template>
<div>
  <h1>markdown组件</h1>
  <div>地址：https://www.npmjs.com/package/vm-markdown</div>
  <vm-markdown theme="default"
  width="1000px"
  height="600px"
  v-on:gethtml="showHtml"
  :defaultText="intro">
  </vm-markdown>
</div>
</template>

<script>
  import VmMarkdown from 'vm-markdown'
    export default {
        name: 'vm-markdown-example',
        components: {VmMarkdown},
        props: [],
        data() {
            return {
              //默认内容
              intro: ''
            }
        },
        methods: {
          showHtml (html) {
            // get html string here
          }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>
