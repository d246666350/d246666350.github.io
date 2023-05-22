<template lang="pug">
block content
._page_content(:class="contentClass")
  img.bg(src="@/assets/home/park.png", alt="")
  .box
    img.protagonist.protagonist1(src="@/assets/home/protagonist1.gif", alt="")
    img.protagonist.protagonist2(src="@/assets/home/protagonist2.gif", alt="")
    img.protagonist.protagonist0(src="@/assets/home/protagonist.gif", alt="")
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
@import url(./second.less);
._page_content {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  .bg {
    position: absolute;
    width: 100 / 720 * 1280vh;
    height: 100vh;
    right: 0;
    animation-name: bg;
    animation-direction: normal;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-duration: 5s;
    animation-fill-mode: forwards;
  }
  .box {
    position: relative;
    width: 100 / 720 * 1280vh;
    height: 100vh;
  }
  .protagonist {
    position: absolute;
    width: 720 / 4 / 7.2vh;
    height: 720 / 4 / 7.2vh;
    top: 60vh;
    left: 0;
    animation-name: protagonist;
    animation-direction: normal;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-duration: 3s;
    animation-fill-mode: both;
    animation-delay: 4s;
    &.protagonist0 {
      top: 70vh;
      left: 360 / 4 / 7.2vh;
    }
    &.protagonist1 {
      left: 720 / 4 / 7.2vh;
    }
    &.protagonist2 {
      left: 0;
    }
  }
}
</style>