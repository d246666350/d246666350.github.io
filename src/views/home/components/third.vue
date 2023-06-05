<template lang="pug">
block content
._paga_content
  .mask(
    :class="[showMask ? '' : 'hidden', canClick ? 'click' : '', maskClassName?maskClassName:'']",
    @click="clickMask"
  )
    .text {{ maskText }}
    van-icon.next(
      v-if="canClick",
      name="arrow-down",
      color="white",
      size="5vh"
    )
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import allText from "./text";
export default defineComponent({
  setup(props, { emit }) {
    const canClick = ref(false);
    const maskText = ref("");
    const showMask = ref(true);
    const maskClassName = ref("");
    const clickMask = () => {
      maskText.value = "";
      canClick.value = false;
      maskClassName.value = "flicker";
    };
    let processing = false;
    const start = () => {
      if (processing) return;
      processing = true;
      setTimeout(() => {
        let text = allText.third;
        const interval = setInterval(() => {
          if (text.length > 0) {
            maskText.value = maskText.value + text[0];
            text = text.substring(1);
          } else {
            clearInterval(interval);
            canClick.value = true;
          }
        }, 100);
      }, 2000);
    };

    onMounted(() => {
      start();
    });
    return { start, showMask, maskText, canClick, clickMask, maskClassName };
  },
});
</script>

<style lang="less" scoped>
@import url(./first.less);
.flicker {
  animation-name: flicker, redbg;
  animation-direction: reverse, normal;
  animation-timing-function: linear;
  animation-iteration-count: 2, 1;
  animation-duration: 0.2s, 1s;
  animation-delay: 0s, 1s;
  animation-fill-mode: both, both;
}
._paga_content {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 1;
    pointer-events: none;
    transition: all 4s;
    &.hidden {
      opacity: 0;
    }
    &.click {
      pointer-events: auto;
    }
    .text {
      margin: 25vh 12.5% 0;
      color: white;
      font-family: mianfeiziti;
      font-size: 5vw;
      line-height: 200%;
    }
  }
}
</style>
