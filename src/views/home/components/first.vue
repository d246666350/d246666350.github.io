<template lang="pug">
block content
._paga_content(:class="contentClass")
  img.sky(src="@/assets/home/sky.png", alt="")
  .cloud
  .cloud1
  .road
  .car
    img.car_body(src="@/assets/home/car.png", alt="")
    img.run(src="@/assets/home/run.png", alt="")
    img.run1(src="@/assets/home/run.png", alt="")
  img.protagonist(src="@/assets/home/protagonist.gif", alt="")
  //- span.title 寻遇之旅
  img.title(src="@/assets/home/title.png", alt="")
  .btn(@click="start")
  .mask(
    :class="[showMask ? '' : 'hidden', canClick ? 'click' : '']",
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
    const contentClass = ref("");
    const canClick = ref(false);
    let processing = false;
    const start = () => {
      if (processing) return;
      processing = true;
      contentClass.value = "animate";
      setTimeout(() => {
        showMask.value = true;
        setTimeout(() => {
          let text = allText.first;
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
      }, 3000);
    };
    const maskText = ref("");
    const showMask = ref(true);
    const clickMask = () => {
      emit("showNext");
    };
    onMounted(() => {
      showMask.value = false;
    });
    return { contentClass, start, showMask, maskText, canClick, clickMask };
  },
});
</script>

<style lang="less" scoped>
@import url(./first.less);
._paga_content {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  &.animate {
    .road {
      animation-name: wave;
      animation-direction: normal;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-duration: 10s;
      animation-delay: @delay;
    }
    .car {
      .run {
        animation-name: roll;
        animation-direction: normal;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-duration: 1s;
        animation-delay: @delay;
      }
      .run1 {
        animation-name: roll;
        animation-direction: normal;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-duration: 1s;
        animation-delay: @delay;
      }
    }
    .protagonist {
      animation-name: protagonist;
      animation-direction: normal;
      animation-timing-function: linear;
      animation-duration: 2s;
      animation-delay: @delay1;
      animation-fill-mode: forwards;
    }
    .title {
      animation-name: disappear;
      animation-direction: normal;
      animation-timing-function: linear;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
    .btn {
      animation-name: disappear;
      animation-direction: normal;
      animation-timing-function: linear;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
  }
  img {
    position: absolute;
    &.sky {
      width: 44 / 1280 * 5120vh;
      height: 44vh;
      .center;
    }
  }
  .cloud {
    position: absolute;
    width: 44 / 1280 * 2 * 5120vh;
    height: 44vh;
    .center;
    background-image: url(~@/assets/home/cloud.png);
    background-size: 50% 100%;
    animation-name: wave;
    animation-direction: normal;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-duration: 20s;
  }
  .cloud1 {
    position: absolute;
    width: 44 / 1280 * 2 * 5120vh;
    height: 44vh;
    .center;
    background-image: url(~@/assets/home/cloud1.png);
    background-size: 50% 100%;
    animation-name: wave;
    animation-direction: normal;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-duration: 25s;
  }
  .road {
    background-image: url(~@/assets/home/road.png);
    background-size: 50% 100%;
    width: 75 / 1280 * 2 * 5120vh;
    height: 75vh;
    position: absolute;
    bottom: 0;
    // animation-name: wave;
    // animation-direction: normal;
    // animation-timing-function: linear;
    // animation-iteration-count: infinite;
    // animation-duration: 10s;
    // animation-delay: @delay;
  }
  .car {
    position: absolute;
    bottom: 20vh;
    left: 10%;
    width: 20 / 1280 * 2 * 1312vh;
    height: 20vh;
    .car_body {
      width: 20 / 1280 * 2 * 1312vh;
      height: 20vh;
    }
    .run {
      width: 222 / 4 / 7.2vh;
      height: 224 / 4 / 7.2vh;
      top: 15vh;
      left: 19%;
      // animation-name: roll;
      // animation-direction: normal;
      // animation-timing-function: linear;
      // animation-iteration-count: infinite;
      // animation-duration: 1s;
      // animation-delay: @delay;
    }
    .run1 {
      width: 222 / 4 / 7.2vh;
      height: 224 / 4 / 7.2vh;
      top: 15vh;
      right: 17%;
      // animation-name: roll;
      // animation-direction: normal;
      // animation-timing-function: linear;
      // animation-iteration-count: infinite;
      // animation-duration: 1s;
      // animation-delay: @delay;
    }
  }
  .protagonist {
    width: 720 / 4 / 7.2vh;
    height: 720 / 4 / 7.2vh;
    position: absolute;
    bottom: 12vh;
    right: 2vh;
    // animation-name: protagonist;
    // animation-direction: normal;
    // animation-timing-function: linear;
    // animation-duration: 2s;
    // animation-delay: @delay1;
    // animation-fill-mode: forwards;
  }
  .title {
    position: absolute;
    font-family: mianfeiziti;
    color: black;
    text-shadow: 0 1px white, 1px 0 white, -1px 0 white, 0 -1px white;
    left: 50%;
    transform: translateX(-50%);
    animation-name: title;
    animation-direction: normal;
    animation-timing-function: ease-out;
    animation-duration: 2s;
    top: 10vh;
    pointer-events: none;
    height: 18vh;
  }
  .btn {
    background-image: url(~@/assets/home/start.png);
    background-size: 100% 100%;
    width: 8 / 1194 * 2106vh;
    height: 8vh;
    position: absolute;
    top: 40vh;
    left: 50%;
    transform: translateX(-50%) scale(1.8);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: mianfeiziti;
  }
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
