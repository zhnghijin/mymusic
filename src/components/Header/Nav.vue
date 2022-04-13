<template>
  <ul class="nav-list">
    <div v-for="item in listData" :key="item.link">
      <li class="nav-item">
        <router-link :to="item.link" v-if="item.isSelf">{{item.title}}</router-link>
        <a href="item.link" target="_blank" v-else>{{item.title}}</a>
        <i class="arrow" v-show="$route.path.includes(item.link)"/>
      </li>
    </div>
  </ul>
</template>

<script lang ='ts'>
export default {
  props:{
    listData: Array
  }
}
</script>
<style lang="scss" scoped>
.nav-list{
  display: flex; //将li放到同一行
  align-items: center;
  height: 70px;
  .nav-item{
    position: relative;
    height: 100%;
    a{
      display: block;
      padding: 0 19px;
      width: 100%;
      line-height: 70px;
      color: #ccc;
      &:hover{
        background-color: #000;
        color: #fff;
      }
      // &.router-link-active{
      //   background-color: #000;
      //   color: #fff;
      // }
    }
    .arrow{
      position:absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid #c20c0c;
    }
  }
}
</style>