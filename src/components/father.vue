<template>
    <div>
      <sun1></sun1>
      <sun2></sun2>
    </div>
</template>

<script>
    import Sun1 from "./sun1";
    import Sun2 from "./sun2";
    export default {
        name: 'father',
        components: {Sun2, Sun1},
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
