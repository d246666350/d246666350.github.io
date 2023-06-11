<template lang="pug">
block content
._paga_content
  .mask(
    :class="[showMask ? '' : 'hidden', canClick ? 'click' : '', maskClassName ? maskClassName : '']",
    @click="clickMask"
  )
    img.bg(src="@/assets/home/ninth_bg.jpg")
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

    let step = ref(0);
    // let step = ref(4);

    const clickMask = () => {
      canClick.value = false;
      if (step.value === 4) {
        emit("showNext");
        return
      }
      step.value += 1;
      maskText.value = "";
      start(allText[`ninth_${step.value}`]);
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
      start(allText.ninth_0);
    });
    return {
      start,
      showMask,
      maskText,
      canClick,
      clickMask,
      maskClassName,
      step,
    };
  },
});
</script>
        
<style lang="less" scoped>
@import url(./first.less);
@import url(./third.less);
@import url(./seventh.less);
.next {
  z-index: 2;
}
.flicker {
  animation-name: flicker, redbg;
  animation-direction: reverse, normal;
  animation-timing-function: linear;
  animation-iteration-count: 2, 1;
  animation-duration: 0.2s, 1s;
  animation-delay: 0s, 1s;
  animation-fill-mode: both, both;
}
.step_1 {
  animation-name: r2b;
  animation-direction: normal;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-duration: 1s;
  animation-fill-mode: both;
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
      height: 100vh;
      object-fit: contain;
      position: absolute;
      animation-name: bg;
      animation-direction: normal;
      animation-timing-function: linear;
      animation-iteration-count: 1;
      animation-duration: 300s;
      animation-fill-mode: both;
    }
    .photo {
      position: absolute;
      top: calc(50vh - 45 / 16 * 9vw);
      left: calc(5vw - 10px);
      border: 10px white solid;
      box-shadow: 0 0 20px rgba(#ececec, 0.3);
      animation-name: appear, showDog;
      animation-timing-function: linear;
      animation-duration: 2s, 20s;
      animation-fill-mode: both;
      animation-delay: 0s, 2s;
      z-index: 1;
      transform: rotateZ(-30deg);
      opacity: 0.6;
      img {
        margin: -2px;
        width: 80vw;
        height: 80 / 16 * 9vw;
        object-fit: fill;
        transform-origin: center;
        opacity: 0.6;
      }
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
        