<template>
<header class="header-wrap">
  <div class="top-wrap">
    <div class="top-inner w-max-container">
      <div class="left-part">
        <Logo />
        
      </div>
      <div class="right-part">

      </div>
    </div>
  </div>
</header>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Logo from './Logo.vue'
export default defineComponent({
  components:{ Logo }
})
</script>
<style scoped>

</style>