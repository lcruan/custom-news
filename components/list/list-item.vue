<template>
  <!-- list-scroll 滚动内容组件
       list-card 卡片组件
  -->
  <list-scroll class="list-scroll" @loadmore="loadmore">
    <view>
           <list-card mode="base" :item="item" v-for="item in list" :key="item._id"></list-card>
    </view>
     <uni-load-more v-if="list.length === 0 || list.length > 7" :status="load.loading || 'loading'" iconType="snow"></uni-load-more>
   </list-scroll>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        default() {
          return []
        }
      },
      load: {
        type: Object,
        default() {
          return {
            loading: "loading"
          }
        }
      }
    },
    methods: {
      loadmore() {
        this.$emit('loadmore')
      }
    }
  }
</script>

<style lang="scss">
  .list-scroll {
    height: 100%;
  }
</style>