<template lang="pug">
block content
  #app_name(:class="[remUnit ? '' : 'overall_elder']")
    router-view
</template>

<script>
export default {
  name: "App",
  setup() {},
};
</script>

<style lang="less" scoped>
#app_name {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
