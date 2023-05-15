<template lang="pug">
block content
.__content
  First.page(@showNext="showNext", :class="current === 0 ? '' : 'hidden'")
  Second.page(:class="current === 1 ? '' : 'hidden'")
</template>

<script >
import First from "./components/first";
import Second from "./components/second";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    First,
    Second,
  },
  setup() {
    const current = ref(0);
    const showNext = () => {
      console.log("showNext");
      current.value = 1;
    };
    return {
      current,
      showNext,
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