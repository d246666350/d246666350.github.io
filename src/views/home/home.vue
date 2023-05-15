<template lang="pug">
block content
  ._paga_content(:class="contentClass")
    img.sky(src="@/assets/home/sky.png", alt="")
    .cloud
    .cloud1
    .road
    img.protagonist(src="@/assets/home/protagonist.gif", alt="")
    .car
      img.car_body(src="@/assets/home/car.png", alt="")
      img.run(src="@/assets/home/run.png", alt="")
      img.run1(src="@/assets/home/run.png", alt="")
    span.title 寻遇之旅
    .btn(@click="start") 开始
    .mark
</template>

<script >
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const contentClass = ref("");
    const start = () => {
      contentClass.value = "animate";
    };
    return { contentClass, start };
  },
});
</script>

<style lang="less" scoped>
@import url(./home.less);
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
  }
  img {
    position: absolute;
    &.sky {
      width: 100vw;
      height: 100 / 5120 * 1280vw;
    }
  }
  .cloud {
    position: absolute;
    width: 200vw;
    height: 100 / 5120 * 1280vw;
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
    width: 200vw;
    height: 100 / 5120 * 1280vw;
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
    width: 200vw;
    height: 100 / 5120 * 2176vw;
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
    bottom: 10vw;
    left: 100px;
    width: 100 / 5120 * 1312vw;
    height: 100 / 5120 * 576vw;
    .car_body {
      width: 100 / 5120 * 1312vw;
      height: 100 / 5120 * 576vw;
    }
    .run {
      width: 100 / 5120 * 222vw;
      height: 100 / 5120 * 224vw;
      top: calc(100 / 5120 * 576vw - 0.58 * 100 / 5120 * 224vw);
      left: 19%;
      // animation-name: roll;
      // animation-direction: normal;
      // animation-timing-function: linear;
      // animation-iteration-count: infinite;
      // animation-duration: 1s;
      // animation-delay: @delay;
    }
    .run1 {
      width: 100 / 5120 * 222vw;
      height: 100 / 5120 * 224vw;
      top: calc(100 / 5120 * 576vw - 0.58 * 100 / 5120 * 224vw);
      right: 18%;
      // animation-name: roll;
      // animation-direction: normal;
      // animation-timing-function: linear;
      // animation-iteration-count: infinite;
      // animation-duration: 1s;
      // animation-delay: @delay;
    }
  }
  .protagonist {
    width: 100 / 5120 * 720vw;
    height: 100 / 5120 * 720vw;
    position: absolute;
    bottom: 10vw;
    right: 10vw;
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
    font-size: 10vw;
    left: 50%;
    transform: translateX(-50%);
    animation-name: title;
    animation-direction: normal;
    animation-timing-function: ease-out;
    animation-duration: 2s;
    top: calc(30vh - 8vw);
    pointer-events: none;
  }
  .btn {
    background-image: url(~@/assets/home/btn.png);
    background-size: 100% 100%;
    width: 100 / 5120 * 859vw;
    height: 100 / 5120 * 364vw;
    position: absolute;
    top: 80vw;
    left: 50%;
    transform: translateX(-50%) scale(1.8);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4vw;
    font-family: mianfeiziti;
  }
  .mark {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    animation-name: mark;
    animation-direction: normal;
    animation-timing-function: ease-out;
    animation-duration: 4s;
    background-color: black;
    opacity: 0;
    pointer-events: none;
  }
}
</style>