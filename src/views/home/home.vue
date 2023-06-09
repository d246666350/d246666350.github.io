<template lang="pug">
block content
.__content
  First.page(
    v-if="modalCtrl[0]",
    @showNext="showNext",
    :class="current === 0 ? '' : 'hidden'",
    @strat="strat"
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
  Fourth.page(
    v-if="modalCtrl[3]",
    @showNext="showNext",
    :class="current === 3 ? '' : 'hidden'"
  )
  Fifth.page(
    v-if="modalCtrl[4]",
    @showNext="showNext",
    :class="current === 4 ? '' : 'hidden'"
  )
  Sixth.page(
    v-if="modalCtrl[5]",
    @showNext="showNext",
    :class="current === 5 ? '' : 'hidden'"
  )
  Seventh.page(
    v-if="modalCtrl[6]",
    @showNext="showNext",
    :class="current === 6 ? '' : 'hidden'"
  )
  Eighth.page(
    v-if="modalCtrl[7]",
    @showNext="showNext",
    :class="current === 7 ? '' : 'hidden'"
  )
  Ninth.page(
    v-if="modalCtrl[8]",
    @showNext="showNext",
    :class="current === 8 ? '' : 'hidden'"
  )
  Tenth.page(
    v-if="modalCtrl[9]",
    @showNext="showNext",
    :class="current === 9 ? '' : 'hidden'"
  )
img.play_ctrl_img(:src="playCtrlImg", @click="changePlayStatus")
audio(:controls="false", autoplay, loop, ref="audio")
  source(src="@/assets/home/bgm.mp3", type="audio/mpeg")
</template>

<script>
import playIcon from "@/assets/home/play.png";
import pauseIcon from "@/assets/home/pause.png";
import { defineComponent, ref, onMounted } from "vue";
import components from "./homeComponents";
export default defineComponent({
  components: {
    ...components,
  },
  setup() {
    const playCtrlImg = ref(playIcon);
    const audio = ref(null);
    const current = ref(8);
    const modalCtrl = ref([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false
    ]);
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

    const strat = () => {
      if (audio.value.paused) {
        changePlayStatus();
      }
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
      strat,
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
