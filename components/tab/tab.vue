<template>
  <view class="tab">
    <scroll-view scroll-x class="tab-scroll">
      <view class="tab-scroll-box">
        <view v-for="(item, index) in list" :key="index"  
          class="tab-scroll-item" 
          @click="clickTab(item, index)"
          :class="{active: activeIndex === index}">
          {{item.name}}
        </view>
      </view>
    </scroll-view>
    <view class="tab-icons" @click="open">
      <uni-icons type="gear" size="26" color="#666"></uni-icons>
    </view>
  </view>
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
      tabIndex: {
        type: Number,
        default: 0
      }
    },
    name:"tab",
    data() {
      return {
        activeIndex: 0
      }
    },
    // 可以监听data props中的变化
    watch: {
      tabIndex(newVal) {
        this.activeIndex = newVal
      }
    },
    methods: {
      clickTab(item, index) {
        this.activeIndex = index
        this.$emit('tab', {
          data: item,
          index: index
        })
      },
      open() {
        uni.navigateTo({
          url: "/pages/home-label/home-label"
        })
      }
    }
  }
</script>

<style lang="scss">
.tab {
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #f5f5f5;
  width: 100%;
  box-sizing: border-box;
  .tab-scroll {
    flex: 1;
    overflow: hidden;
    box-sizing: border-box;
    .tab-scroll-box {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      height: 45px;
      box-sizing: border-box;
      .tab-scroll-item {
        flex-shrink: 0;
        padding: 0 10px;
        color: #333;
        font-size: 14px;
        &.active {
          color: $mk-base-color;
        }
      }
    }
  }

  .tab-icons {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    &::after {
      content: '';
      position: absolute;
      top: 12px;
      bottom: 12px;
      left: 0;
      width: 1px;
      background-color: #ddd;
    }
  }
}
</style>