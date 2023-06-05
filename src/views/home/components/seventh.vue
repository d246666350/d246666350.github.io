<template lang="pug">
block content
._paga_content
  .mask(
    :class="[showMask ? '' : 'hidden', canClick ? 'click' : '', maskClassName ? maskClassName : '']",
    @click="clickMask"
  )
    img.bg(src="@/assets/home/bg.png", :class="hiddenBg ? 'hidden' : ''")
    .text(:data-content="maskText") {{ maskText }}
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
    const hiddenBg = ref(false);

    let step = ref(0);
    // let step = ref(4);

    const clickMask = () => {
      if (step.value === 3) {
        emit("showNext");
        return;
      }
      canClick.value = false;
      step.value += 1;
      maskText.value = "";
      start(allText[`seventh_${step.value}`]);
    };
    let processing = false;
    const start = (text) => {
      if (processing) return;
      processing = true;
      return new Promise((resolve) => {
        const interval = setInterval(() => {
          if (text.length > 0) {
            maskText.value = maskText.value + text[0];
            text = text.substring(1);
          } else {
            clearInterval(interval);
            canClick.value = true;
            processing = false;
            resolve();
          }
        }, 100);
      });
    };

    onMounted(() => {
      start(allText.seventh_0);
    });
    return {
      start,
      showMask,
      maskText,
      canClick,
      clickMask,
      maskClassName,
      step,
      hiddenBg,
    };
  },
});
</script>
        
<style lang="less" scoped>
@import url(./seventh.less);
.next {
  z-index: 2;
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
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100 / 1440 * 3200vh;
      height: 100vh;
      opacity: 0.7;
      animation-name: bg;
      animation-direction: normal;
      animation-timing-function: linear;
      animation-iteration-count: 1;
      animation-duration: 120s;
      animation-fill-mode: forwards;
      transition: all 1s;
    }
    .text {
      position: inherit;
      z-index: 2;
      margin: 25vh 12.5% 0;
      color: white;
      font-family: mianfeiziti;
      font-size: 5vw;
      line-height: 200%;
      -webkit-text-stroke: 2px rgba(0, 0, 0, 0.7);
      position: relative;
      &::before {
        content: attr(data-content);
        position: absolute;
        -webkit-text-stroke: 0;
        color: white;
      }
    }
    .protagonist {
      width: 720 / 4 / 7.2vh;
      height: 720 / 4 / 7.2vh;
      position: absolute;
      bottom: 50vh;
      right: 50vw;
      transform: translate(360 / 4 / 7.2vh, 360 / 4 / 7.2vh);
      animation-name: appear;
      animation-direction: alternate;
      animation-timing-function: linear;
      animation-iteration-count: 2;
      animation-duration: 2s;
      animation-fill-mode: both;
    }
  }
}
</style>
        