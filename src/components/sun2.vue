<template>
    <div>

    </div>
</template>

<script>
  import Bus from './bus'
    export default {
        name: 'sun2',
        components: {},
        props: [],
        data() {
            return {}
        },
        methods: {},
        mounted() {

        },
      created(){
          Bus.$on('test',function (res) {
            alert(res)
          })
      }
    }
</script>

<style scoped>

</style>
