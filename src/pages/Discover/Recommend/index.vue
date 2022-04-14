<template>
  <div class="recommend-wrap">
    <Banner :bannerList="bannerList" />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import Banner from "./Banner/index.vue";
import { httpGetBanners, BannerTypeEnum } from "@/requests/recommend";
import { IState } from "./typing";

export default defineComponent({
  components: {
    Banner,
  },
  setup() {
    const state = reactive<IState>({
      bannerList: [], // banner
      hotPlayList: [], // 热门歌单
      albumList: [], // 热门新碟
      singerList: [], // 推荐歌手
      rankList: [], // 推荐榜单
    });

    onMounted((): void => {
      getBannerList();
    });

    /**
     * 获取banner数据
     */
    const getBannerList = async () => {
      const { banners } = await httpGetBanners(BannerTypeEnum.PC);
      state.bannerList = banners;
      console.log(banners, 'banners');
    };

    return {
      ...toRefs(state),
    };
  },
});
</script>
