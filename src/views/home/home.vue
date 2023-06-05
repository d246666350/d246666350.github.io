<template lang="pug">
block content
.__content
  First.page(
    v-if="modalCtrl[0]",
    @showNext="showNext",
    :class="current === 0 ? '' : 'hidden'"
  )
  Second.page(
    v-if="modalCtrl[1]",
    @showNext="showNext",
    :class="current === 1 ? '' : 'hidden'"
  )
  Third.page(
    v-if="modalCtrl[2]",
    @showNext="showNext",
    :class="current === 2 ? '' : 'hidden'"
  )
img.play_ctrl_img(:src="playCtrlImg",@click="changePlayStatus")
audio(:controls="false" autoplay loop ref="audio")
  source(src="@/assets/home/bgm.mp3" type="audio/mpeg")
</template>

<script>
import First from "./components/first";
import Second from "./components/second";
import Third from "./components/third.vue";
import playIcon from "@/assets/home/play.png";
import pauseIcon from "@/assets/home/pause.png";
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  components: {
    First,
    Second,
    Third,
  },
  setup() {
    const playCtrlImg = ref(playIcon);
    const audio = ref(null);
    // const current = ref(0);
    // const modalCtrl = ref([true, false, false]);
    const current = ref(2);
    const modalCtrl = ref([false, false, true]);
    const showNext = () => {
      modalCtrl.value[current.value + 1] = true;
      setTimeout(() => {
        current.value += 1;
        setTimeout(() => {
          modalCtrl.value[current.value - 1] = false;
        }, 2000);
      }, 50);
    };

    const changePlayStatus = () => {
      if (audio.value.paused) {
        audio.value.play();
      } else {
        audio.value.pause();
      }
      playCtrlImg.value = audio.value.paused ? playIcon : pauseIcon;
    };

    onMounted(() => {
      setTimeout(() => {
        playCtrlImg.value = audio.value.paused ? playIcon : pauseIcon;
      }, 500);
    });
    return {
      current,
      showNext,
      modalCtrl,
      audio,
      playCtrlImg,
      changePlayStatus,
    };
  },
});
</script>

<style lang="less">
@import url(./home.less);
</style>
<style lang="less" scoped>
.__content {
  background-color: black;
  .page {
    transition: all 2s;
    opacity: 1;
    position: absolute;
    top: 0;
    &.hidden {
      opacity: 0;
      pointer-events: none;
    }
  }
}
.play_ctrl_img {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 5vw;
  height: 5vw;
  opacity: 0.7;
}
</style>
