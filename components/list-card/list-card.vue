<template>
  <!-- 卡片组件 -->
  <view @click="open">
    <!-- 基础卡片 -->
   <view class="listcard" v-if="item.mode === 'base'">
      <view class="listcard-image">
        <image :src="item.cover[0]" mode="aspectFill"></image>
      </view>
      <view class="listcard-content">
        <view class="listcard-content-title">
          <text>{{item.title}}</text>
          <likes :types="types" :item="item"></likes>
        </view>
        <view class="listcard-content-des">
          <view class="listcard-content-des-label">
            <view class="listcard-content-des-label-item">
              {{item.classify}}
            </view>
          </view>
          <view class="listcard-content-des-browse">
            {{item.browse_count}}
          </view>
        </view>
      </view>
    </view>
    
    <!-- 多图模式 -->
   <view class="listcard mode-column" v-if="item.mode === 'column'">
      <view class="listcard-content">
        <view class="listcard-content-title">
          <text>{{item.title}}</text>
          <likes :types="types" :item="item"></likes>
        </view>
        <view class="listcard-image">
          <!-- 只展示3张 -->
          <view v-if="index < 3" v-for="(item, index) in item.cover" :key="index" class="listcard-image-item">
            <image :src="item" mode="aspectFill"></image>
          </view>
        </view>
        <view class="listcard-content-des">
          <view class="listcard-content-des-label">
            <view class="listcard-content-des-label-item">
              {{item.classify}}
            </view>
          </view>
          <view class="listcard-content-des-browse">
            {{item.browse_count}}
          </view>
        </view>
      </view>
    </view>
    
    <!-- 大图模式 -->
    <view class="listcard mode-image" v-if="item.mode === 'image'">
      <view class="listcard-image">
        <image :src="item.cover[0]" mode="aspectFill"></image>
      </view>
      <view class="listcard-content">
        <view class="listcard-content-title">
          <text>{{item.title}}</text>
          <likes :types="types" :item="item"></likes>
        </view>
        <view class="listcard-content-des">
          <view class="listcard-content-des-label">
            <view class="listcard-content-des-label-item">
               {{item.classify}}
            </view>
          </view>
          <view class="listcard-content-des-browse">
            {{item.browse_count}}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      },
      types: {
        type: String,
        default: ''
      }
    },
    name:"list-card",
    data() {
      return {
        
      };
    },
    methods: {
      open() {
        console.log(this.item);
        const item = this.item
        // 注意这里发送的事件叫 click
        this.$emit('click', this.item)
        const params = {
          _id: item._id,
          author: item.author,
          title: item.title,
          create_time: item.create_time,
          thumbs_up_count: item.thumbs_up_count,
          browse_count: item.browse_count
        }
        // 这里传参注意长度,在H5中可能会被截断
        uni.navigateTo({
          url: "/pages/home-detail/home-detail?params=" + JSON.stringify(params)
        })
      }
    }
  }
</script>

<style lang="scss">
.listcard {
  display: flex;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
  box-sizing: border-box;
  .listcard-image {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    border-radius: 5px;
    overflow: hidden;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .listcard-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
    width: 100%;
    .listcard-content-title {
      position: relative;
      padding-right: 30px;
      font-size: 14px;
      color: #333;
      font-weight: 400;
      line-height: 1.2;
      text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    .listcard-content-des {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      .listcard-content-des-label {
        display: flex;
        .listcard-content-des-label-item {
          padding: 0 5px;
          margin-right: 5px;
          border-radius: 15px;
          color: $mk-base-color;
          border: 1px $mk-base-color solid;
        }
      }
      .listcard-content-des-browse {
        color: #999;
        line-height: 1.5;
      }
    }
    
  }
  
  // 父元素下面同级
  &.mode-column {
    .listcard-content {
      width: 100%;
      padding-left: 0;
    }
    .listcard-image {
      display: flex;
      margin-top: 10px;
      width: 100%;
      height: 70px;
      .listcard-image-item {
        margin-left: 10px;
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
        // 父元素第一个元素
        &:first-child {
          margin-left: 0;
        }
        
        image {
          width: 100%;
          height: 100%;
        }
      }
    }
    .listcard-content-des {
      margin-top: 10px;
    }
  }
  
  &.mode-image {
    flex-direction: column;
    .listcard-image {
      width: 100%;
      height: 100px;
    }
    .listcard-content {
      padding-left: 0;
      margin-top: 10px;
      .listcard-content-des {
        display: flex;
        align-items: center;
        margin-top: 10px;
      }
    }
  }
}
</style>