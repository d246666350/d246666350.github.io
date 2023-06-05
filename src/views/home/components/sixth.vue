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
  img.protagonist.protagonist0(src="@/assets/home/protagonist.gif", alt="")
  img.dog(src="@/assets/home/dog.gif")
</template>
    
<script>
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  setup(props, { emit }) {
    const contentClass = ref("");
    const start = () => {
      contentClass.value = "animate";
    };

    onMounted(() => {
      setTimeout(() => {
        start();
        setTimeout(() => {
          emit("showNext");
        }, 3000);
      }, 2000);
    });
    return { contentClass, start };
  },
});
</script>
    
<style lang="less" scoped>
@import url(./first.less);
@import url(./sixth.less);
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
      animation-direction: normal;
      animation-timing-function: linear;
      animation-duration: 2s;
      animation-delay: @delay1;
      animation-fill-mode: forwards;
      &.protagonist0 {
        animation-name: protagonist;
      }
    }
    .dog {
      animation-name: dog;
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
      width: 44 / 1280 * 5120vh;
      height: 44vh;
    }
  }
  .cloud {
    position: absolute;
    width: 44 / 1280 * 2 * 5120vh;
    height: 44vh;
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
    }
    .run1 {
      width: 222 / 4 / 7.2vh;
      height: 224 / 4 / 7.2vh;
      top: 15vh;
      right: 17%;
    }
  }
  .protagonist {
    width: 720 / 4 / 7.2vh;
    height: 720 / 4 / 7.2vh;
    position: absolute;
    bottom: 12vh;
    right: 2vh;
  }
  .dog {
    width: 0.8 * 720 / 4 / 7.2vh;
    height: 0.8 * 720 / 4 / 7.2vh;
    bottom: 12vh;
    right: 20vh;
  }
}
</style>
    