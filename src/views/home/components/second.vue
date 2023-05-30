<template lang="pug">
block content
._page_content(:class="'content_'+current")
  //- img.bg(src="@/assets/home/park.png", alt="")
  img.bg(src="@/assets/home/bg_0.png", alt="")
  img.dog(:src="dogSrc"
      @click="showText")
  img.bg(src="@/assets/home/bg_1.png", alt="")
  .box
    img.protagonist.protagonist2(src="@/assets/home/protagonist2.gif", alt="")
    img.protagonist.protagonist0(
      :src="protagonist0Src"
      alt=""
      @click="showText"
      @animationend="changeProtagonist0"
    )
    img.protagonist.protagonist1(src="@/assets/home/protagonist1.gif", alt="")
Dialog(ref="dialog", @close="next")
</template>

<script>
import { defineComponent, ref } from "vue";
import protagonist0_text from "@/assets/home/protagonist0_text.gif";
import protagonist0 from "@/assets/home/protagonist.gif";
import dog from "@/assets/home/dog.gif";
import dog_text from "@/assets/home/dog_text.gif";
import Dialog from "./dialog";
export default defineComponent({
  components: {
    Dialog,
  },
  setup() {
    const dialog = ref(null);
    const protagonist0Src = ref(protagonist0);
    const dogSrc = ref(dog_text);
    const showDialog = ref(false);
    const changeProtagonist0 = () => {
      protagonist0Src.value = protagonist0_text;
      loading = false;
    };
    let current = ref(0);
    let loading = true;
    const showText = () => {
      if (!loading) {
        if (current.value === 0) {
          protagonist0Src.value = protagonist0;
        } else if (current.value === 1) {
          protagonist0Src.value = protagonist0_text;
          dogSrc.value = dog;
        } else if (current.value === 2) {
          protagonist0Src.value = protagonist0;
        }
        dialog.value.showDialog(current.value);
        loading = true;
      }
    };
    const next = (step) => {
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
      dogSrc,
    };
  },
});
</script>

<style lang="less" scoped>
@import url(./second.less);
// @time: 5s;
@time: 1s;
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
        top: 60vh;
        left: 460 / 4 / 7.2vh;
      }
      &.protagonist2 {
        left: -40 / 4 / 7.2vh;
      }
    }
  }
  .dog {
    left: calc(-40 / 720 * 1280vh + 3vh);
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
        pointer-events: none;
      }
      &.protagonist1 {
        top: 60vh;
        left: calc(12 / 720 * 1280vh);
      }
    }
  }
  .dog {
    left: 3vh;
  }
}
.content_2 {
  .bg {
    left: calc(-68 / 720 * 1280vh);
  }
  .box {
    .protagonist {
      top: 15vh;
      left: 0;
      &.protagonist0 {
        left: calc(12 / 720 * 1280vh);
      }
      &.protagonist1 {
        top: 35vh;
        left: 460 / 4 / 7.2vh;
      }
      &.protagonist2 {
        left: -40 / 4 / 7.2vh;
      }
    }
  }
  .dog {
    left: calc(-40 / 720 * 1280vh + 3vh);
  }
}
.content_3 {
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
        top: 60vh;
        left: 460 / 4 / 7.2vh;
      }
      &.protagonist2 {
        left: -40 / 4 / 7.2vh;
      }
    }
  }
  .dog {
    left: calc(-40 / 720 * 1280vh + 3vh);
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
    pointer-events: none;
  }
  .box {
    position: relative;
    width: 100 / 720 * 1280vh;
    height: 100vh;
    pointer-events: none;
  }
  .protagonist {
    pointer-events: auto;
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
      width: 0.9 * 720 / 4 / 7.2vh;
      height: 0.9 * 720 / 4 / 7.2vh;
    }
  }
  .dog {
    transition: all @time;
    top: 60vh;
    position: absolute;
    width: 0.8 * 720 / 4 / 7.2vh;
    height: 0.8 * 720 / 4 / 7.2vh;
  }
}
</style>
