<template lang="pug">
block content
._page_content(:class="'content_'+current")
  img.bg(src="@/assets/home/park.png", alt="")
  .box
    img.protagonist.protagonist2(src="@/assets/home/protagonist2.gif", alt="")
    img.protagonist.protagonist0(
      :src="protagonist0Src",
      alt="",
      @animationend="changeProtagonist0",
      @click="showText"
    )
    img.protagonist.protagonist1(src="@/assets/home/protagonist1.gif", alt="")
Dialog(ref="dialog", @close="next")
</template>

<script>
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
@time: 5s;
.content_0 {
  .bg {
    left: calc(-55 / 720 * 1280vh);
  }
  .box {
    .protagonist {
      top: 45vh;
      left: 0;
      &.protagonist0 {
        left: 680 / 4 / 7.2vh;
      }
      &.protagonist1 {
        left: 460 / 4 / 7.2vh;
      }
      &.protagonist2 {
        left: -40 / 4 / 7.2vh;
      }
    }
  }
}
.content_1 {
  .bg {
    left: calc(-15 / 720 * 1280vh);
    // left: calc(-55 / 720 * 1280vh);
  }
  .box {
    .protagonist {
      top: 45vh;
      left: calc(15 / 720 * 1280vh);
      &.protagonist0 {
        top: 15vh;
        left: calc(66 / 720 * 1280vh);
      }
      &.protagonist1 {
        left: calc(12 / 720 * 1280vh);
      }
    }
  }
}
._page_content {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  --van-popup-background-color: rgba(0, 0, 0, 0.5);
  .bg {
    transition: all @time;
    position: absolute;
    width: 100 / 720 * 1280vh;
    height: 100vh;
    animation-name: bg;
    animation-direction: normal;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-duration: 5s;
  }
  .box {
    position: relative;
    width: 100 / 720 * 1280vh;
    height: 100vh;
  }
  .protagonist {
    position: absolute;
    width: 1.3 * 720 / 4 / 7.2vh;
    height: 1.3 * 720 / 4 / 7.2vh;
    animation-name: protagonist;
    animation-direction: normal;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-duration: 3s;
    animation-fill-mode: both;
    animation-delay: 4s;
    transition: all @time;
    &.protagonist1 {
      top: 60vh;
      width: 0.9 * 720 / 4 / 7.2vh;
      height: 0.9 * 720 / 4 / 7.2vh;
    }
  }
}
</style>
