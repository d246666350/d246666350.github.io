<template lang="pug">
block content
._page_content(:class="contentClass")
  img.bg(src="@/assets/home/park.png", alt="")
</template>
        
<script >
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  setup(props, { emit }) {
    const contentClass = ref("");
    return {
      contentClass,
    };
  },
});
</script>
        
<style lang="less" scoped>
._page_content {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .bg {
    width: 100 / 720 * 1280vh;
    height: 100vh;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>