<template lang="pug">
block content
._page_content(:class="contentClass")
  img.bg(src="@/assets/home/park.png", alt="")
  .box(:class="'box_' + current")
    img.protagonist.protagonist1(src="@/assets/home/protagonist1.gif", alt="")
    img.protagonist.protagonist2(src="@/assets/home/protagonist2.gif", alt="")
    img.protagonist.protagonist0(
      :src="protagonist0Src",
      alt="",
      @animationend="changeProtagonist0",
      @click="showText"
    )
Dialog(ref="dialog", @close="next")
</template>
        
<script >
import { defineComponent, ref, onMounted } from "vue";
import protagonist0_text from "@/assets/home/protagonist0_text.gif";
import protagonist0 from "@/assets/home/protagonist.gif";
import Dialog from "./dialog";
export default defineComponent({
  components: {
    Dialog,
  },
  setup(props, { emit }) {
    const dialog = ref(null);
    const contentClass = ref("");
    const protagonist0Src = ref(protagonist0);
    const showDialog = ref(false);
    const changeProtagonist0 = () => {
      protagonist0Src.value = protagonist0_text;
      loading = false;
    };
    let current = ref(0);
    let loading = true;
    const showText = () => {
      if (!loading && current.value === 0) {
        protagonist0Src.value = protagonist0;
        dialog.value.showDialog(current.value);
        loading = true;
      }
    };
    const next = (step) => {
      console.log(step);
      loading = false;
      current.value = step + 1;
    };
    return {
      contentClass,
      protagonist0Src,
      changeProtagonist0,
      showText,
      showDialog,
      dialog,
      next,
      current,
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
  --van-popup-background-color: rgba(0, 0, 0, 0.5);
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
  .box_1 {
    .protagonist2 {
    }
  }
  .protagonist {
    position: absolute;
    width: 1.3 * 720 / 4 / 7.2vh;
    height: 1.3 * 720 / 4 / 7.2vh;
    top: 45vh;
    left: 0;
    animation-name: protagonist;
    animation-direction: normal;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-duration: 3s;
    animation-fill-mode: both;
    animation-delay: 4s;
    &.protagonist0 {
      top: 60vh;
      left: 320 / 4 / 7.2vh;
    }
    &.protagonist1 {
      left: 680 / 4 / 7.2vh;
    }
    &.protagonist2 {
      left: -40 / 4 / 7.2vh;
    }
  }
}
</style>