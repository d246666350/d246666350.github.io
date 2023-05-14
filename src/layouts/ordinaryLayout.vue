<template lang="pug">
block content
  .ordinary_layout
    router-view
</template>

<script >
import { defineComponent } from "vue";

export default defineComponent({
  name: "ordinaryLayout",
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
</style>