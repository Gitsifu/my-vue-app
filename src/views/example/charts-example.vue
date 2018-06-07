<template>
  <div>
    <schart :canvasId="canvasId"
            :type="type"
            :width="width"
            :height="height"
            :data="data"
            :options="options"
    ></schart>
    <button @click="changeData">改变</button>
  </div>
</template>

<script>
  import Schart from 'vue-schart';

  export default {
    name: 'charts-example',
    components: {Schart},
    props: [],
    data() {
      return {
        canvasId: 'myCanvas',
        type: 'bar',
        width: '400',
        height: '500',
        data: [
          {name: '2014', value: 1342},
          {name: '2015', value: 2123},
          {name: '2016', value: 1654},
          {name: '2017', value: 1795},
        ],
        options: {
          title: 'Total sales of stores in recent years'
        }
      }
    },
    methods: {
      changeData() {
        // 整个 data 被重新赋值时
        this.data = [
          {name: '短袖', value: 1200},
          {name: '休闲裤', value: 1222},
          {name: '连衣裙', value: 1283},
          {name: '外套', value: 1314}
        ];
        // data 里一个属性值被修改时
        this.$set(this.data, 1, {name: '短裙', value: 500});
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
