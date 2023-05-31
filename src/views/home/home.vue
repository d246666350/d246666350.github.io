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
</template>

<script >
import First from "./components/first";
import Second from "./components/second";
import Third from "./components/third.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    First,
    Second,
    Third,
  },
  setup() {
    const current = ref(0);
    const modalCtrl = ref([true, false, false]);
    const showNext = () => {
      modalCtrl.value[current.value + 1] = true;
      setTimeout(() => {
        current.value += 1;
        setTimeout(() => {
          modalCtrl.value[current.value - 1] = false;
        }, 2000);
      }, 50);
    };
    return {
      current,
      showNext,
      modalCtrl,
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
</style>