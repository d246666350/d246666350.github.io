<template lang="pug">
block content
._page_content(:class="'content_' + current")
  //- img.bg(src="@/assets/home/park.png", alt="")
  img.bg(src="@/assets/home/bg1.png", alt="")
  .box
    img.protagonist.protagonist0(:src="protagonist0Src", alt="")
  img.dog(:src="dogSrc", @click="showText")
  img.bg(src="@/assets/home/bg_1.png", alt="")
  .photo(v-if="showPhoto")
    img(src="@/assets/home/photo1.png")
Dialog(ref="dialog", @close="next", @complete="complete")
</template>
        
<script>
import { defineComponent, ref, onMounted } from "vue";
import protagonist0 from "@/assets/home/protagonist.gif";
import dog from "@/assets/home/dog.gif";
import Dialog from "./dialog";
export default defineComponent({
  components: {
    Dialog,
  },
  setup(props, { emit }) {
    const dialog = ref(null);
    const protagonist0Src = ref(protagonist0);
    const dogSrc = ref(dog);
    const showDialog = ref(false);
    let current = ref(0);
    const showPhoto = ref(false);
    const next = () => {
      showPhoto.value = true;
      setTimeout(() => {
        emit("showNext");
      }, 2000);
    };

    onMounted(() => {
      dialog.value.showDialog(6);
    });
    return {
      protagonist0Src,
      showDialog,
      dialog,
      next,
      current,
      dogSrc,
      showPhoto,
    };
  },
});
</script>
        
<style lang="less" scoped>
@import url(./fourth.less);
@import url(./eighth.less);
@time: 5s;
// @time: 1s;
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
    pointer-events: none;
    top: 0;
    animation-name: bg;
    animation-direction: normal;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-duration: 3s;
    animation-delay: 2s;
    animation-fill-mode: both;
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
    animation-name: protagonist, protagonist1;
    animation-direction: normal, normal;
    animation-timing-function: linear, linear;
    animation-iteration-count: 1, 1;
    animation-duration: 2s, 0.3s;
    animation-fill-mode: forwards, forwards;
    animation-delay: 0s, 5s;
    transition: all @time;
    left: 680 / 4 / 7.2vh;
    top: 45vh;
  }
  .dog {
    transition: all @time;
    top: 57.4vh;
    position: absolute;
    width: 0.8 * 720 / 4 / 7.2vh;
    height: 0.8 * 720 / 4 / 7.2vh;
    animation-name: dog0, dog1;
    animation-direction: normal, normal;
    animation-timing-function: linear, linear;
    animation-iteration-count: 1, 1;
    animation-duration: 2s, 0.3s;
    animation-fill-mode: forwards, forwards;
    animation-delay: 0s, 5s;
  }

  .photo {
    position: fixed;
    top: calc(50vh - 45 / 16 * 9vw);
    left: calc(5vw - 10px);
    border: 10px white solid;
    box-shadow: 0 0 20px rgba(#ececec, 0.3);
    animation-name: disappear;
    animation-iteration-count: 1;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 1s;
    width: 90vw;
    height: 90 / 16 * 9vw;
    img {
      width: 90vw;
      height: 90 / 16 * 9vw;
      object-fit: fill;
    }
  }
}
</style>
        