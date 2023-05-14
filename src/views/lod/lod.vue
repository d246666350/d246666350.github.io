<template lang="pug">
block content
  .first-loading-wrp
    .loading-wrp
      span.dot.dot-spin
        i 
        i
        i
        i
    .first-loading-tips 加载中...
</template>


<script >
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "load",
  setup() {
    let router = useRouter();
    let zlbLogin = () => {
        router.push("/home");
    };
    onMounted(() => {
      zlbLogin();
    });
    return {};
  },
});
</script>

<style lang="less" scoped>
.first-loading-wrp {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 420px;
  height: 100%;
}

.first-loading-wrp .loading-wrp {
  padding: 98px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dot {
  animation: antRotate 1.2s infinite linear;
  transform: rotate(45deg);
  position: relative;
  display: inline-block;
  font-size: 32px;
  width: 32px;
  height: 32px;
  box-sizing: border-box;
}

.dot i {
  width: 14px;
  height: 14px;
  position: absolute;
  display: block;
  background-color: #1890ff;
  border-radius: 100%;
  transform: scale(0.75);
  transform-origin: 50% 50%;
  opacity: 0.3;
  animation: antSpinMove 1s infinite linear alternate;
}

.dot i:nth-child(1) {
  top: 0;
  left: 0;
}

.dot i:nth-child(2) {
  top: 0;
  right: 0;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.dot i:nth-child(3) {
  right: 0;
  bottom: 0;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.dot i:nth-child(4) {
  bottom: 0;
  left: 0;
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
}

.first-loading-tips {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1890ff;
}

@keyframes antRotate {
  to {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}

@-webkit-keyframes antRotate {
  to {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}

@keyframes antSpinMove {
  to {
    opacity: 1;
  }
}

@-webkit-keyframes antSpinMove {
  to {
    opacity: 1;
  }
}
</style>