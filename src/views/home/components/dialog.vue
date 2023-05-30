<template lang="pug">
block content
.mask(v-if="show", @click="close")
  .dilog_body
    .content
      .row(v-for="(item, index) in textList", :key="index") {{ item }}
      van-icon.next(
        v-if="showNext",
        name="arrow-down",
        color="white",
        size="5vh"
      )
</template>
<script>
import text from "./text";
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup(props, { emit }) {
    const show = ref(props.show);
    const textList = ref([]);
    const showNext = ref(false);
    let current = undefined;
    const showDialog = (id) => {
      current = id;
      showNext.value = false;
      textList.value = [];
      show.value = true;
      const list = text[id];
      let index = 0;
      let step = 0;
      const putRow = () => {
        textList.value.push("");
        const interval = setInterval(() => {
          if (step < list[index].length) {
            textList.value[index] += list[index][step];
            step += 1;
          } else {
            step = 0;
            clearInterval(interval);
            index += 1;
            if (index >= list.length) {
              showNext.value = true;
            } else {
              setTimeout(() => {
                putRow();
              }, 500);
            }
          }
        }, 100);
      };
      putRow();
    };
    const close = () => {
      if (showNext.value) {
        show.value = false;
        emit("close", current);
      }
    };
    return {
      show,
      textList,
      showDialog,
      showNext,
      close,
    };
  },
});
</script>
<style lang="less" scoped>
.mask {
  width: 100vw;
  height: 98vh;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.dilog_body {
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 5px;
  width: 90vw;
  .content {
    border: white 1px solid;
    padding: 10px;
    border-radius: 10px;
    .row {
      color: white;
      font-size: 2vh;
      line-height: 200%;
    }
  }
}
</style>