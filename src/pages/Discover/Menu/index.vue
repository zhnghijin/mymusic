<template>
  <div class="menu-wrap">
    <div class="menu-inner w-max-container">
      <ul class="list-wrap" v-if="menuList.length">
        <template v-for="item of menuList" :key="item.link">
          <li class="list-item">
            <router-link :to="item.link">
              <span class="item-title">{{ item.title }}</span>
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name:'DiscoverMenu',
  props:{
    menuList:Array
  }
})
</script>