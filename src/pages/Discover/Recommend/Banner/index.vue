<template>
  <div class="banner-wrap" :style="{ background: bgUrl && `url(${bgUrl}?imageView&blur=40x20) center center/6000px` }">
    <div class="banner-inner w-def-container">
      <!-- 轮播图 -->
      <div class="carousel-section">
        <Carousel
          ref="carouselRef"
          :listData="bannerList"
          autoplay
          pagination
          :interval="8000"
          @change="handelCarouselChange"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch, PropType } from 'vue'
import Carousel from '@/components/Carousel/index.vue'
import { IBannerData } from '../typing';
import { IChangeParam } from '@/components/Carousel/typing';

export default defineComponent({
  name: 'Banner',
  components:{
    Carousel
  },
  props:{
    bannerList:{
      type:Array as PropType<IBannerData[]>,
      required: true
    }
  },
  setup(props) {
    const carouselRef = ref(null)
    const bgUrl = ref<String>('')

    /**
     * 轮播切换时的回调
     */
    const handelCarouselChange = ({index}: IChangeParam):void => {
      if(props.bannerList){
        console.log(props.bannerList,'1');
        const bannerList = props.bannerList 
        bgUrl.value = bannerList[index].imageUrl;
      }
    }

    /**
     * 初始化背景图
     */
    watch(
      () => props.bannerList,
      (newValue): void => {
        if (newValue && newValue.length) {
          bgUrl.value = newValue[0].imageUrl;
        }
      }
    );

    return {
      bgUrl,
      carouselRef,
      handelCarouselChange
    }
  },
})
</script>
