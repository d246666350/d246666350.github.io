<template lang="pug">
block content
  ._paga_content
    img.sky(src="@/assets/home/sky.png", alt="")
    .cloud
    .cloud1
    .road
    .car
      img.car_body(src="@/assets/home/car.png", alt="")
      img.run(src="@/assets/home/run.png", alt="")
      img.run1(src="@/assets/home/run.png", alt="")
</template>

<script >
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
@keyframes wave {
  0% {
    background-position: center right;
  }
  100% {
    background-position: center left;
  }
}
@keyframes roll {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
._paga_content {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
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
    animation-name: wave;
    animation-direction: normal;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-duration: 10s;
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
      animation-name: roll;
      animation-direction: normal;
      animation-timing-function: linear;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-duration: 1s;
    }
    .run1 {
      width: 100 / 5120 * 222vw;
      height: 100 / 5120 * 224vw;
      top: calc(100 / 5120 * 576vw - 0.58 * 100 / 5120 * 224vw);
      right: 18%;
      animation-name: roll;
      animation-direction: normal;
      animation-timing-function: linear;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-duration: 1s;
    }
  }
}
</style>