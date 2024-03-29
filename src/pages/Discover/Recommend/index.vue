<template>
  <div class="recommend-wrap">
    <Banner :bannerList="bannerList" />
    <div class="recommend-inner w-def-container">
      <section class="inner-left">
        <Hot :playList="hotPlayList" />
        <RecomAlbum :albumList="albumList" />
      </section>
      <section class="inner-right">
        <!-- 登录提示 -->
        <LoginTip />
        <!-- 入驻歌手 -->
        <RecomSinger :singerList="singerList" />
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import Banner from "./Banner/index.vue";
import Hot from "./Hot/index.vue";
import RecomAlbum from "./RecomAlbum/index.vue";
import LoginTip from "@/components/LoginTip/index.vue";
import { httpGetBanners, httpGetHotPlayList, BannerTypeEnum } from "@/requests/recommend";
import { httpGetHotAlbum } from '@/requests/album';
import { IState } from "./typing";

export default defineComponent({
  components: {
    Banner,
    Hot,
    LoginTip,
    RecomAlbum
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
      getHotPlayList();
      getHotAlbumList();
    });

    /**
     * 获取banner数据
     */
    const getBannerList = async () => {
      const { banners } = await httpGetBanners(BannerTypeEnum.PC);
      state.bannerList = banners;
    };

    /**
     * 获取热门歌单数据
     */
    const getHotPlayList = async () => {
      const { result } = await httpGetHotPlayList(8);
      state.hotPlayList = result;
    };

    /**
     * 获取热门新碟数据
     */
    const getHotAlbumList = async () => {
      const { albums } = await httpGetHotAlbum();
      state.albumList = albums.slice(0, 5);
    };

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.recommend-inner {
  display: flex;
  background-color: #fff;
  .inner-left {
    flex: 1;
    padding: 20px;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    overflow: hidden;
  }
  .inner-right {
    width: 250px;
    border-right: 1px solid #d3d3d3;
  }
}
</style>