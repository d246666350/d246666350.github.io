<template lang="pug">
block content
  van-uploader(
    v-if="showZlbUpload",
    :after-read="afterRead",
    v-model="nowFileList",
    :max-count="maxCount",
    :before-delete="beforeDelete"
  )
  van-uploader(
    v-else,
    :after-read="afterRead",
    v-model="nowFileList",
    :max-count="maxCount",
    :before-delete="beforeDelete",
    readonly,
    @click="selfUpdata"
  )
</template>

<script >
import { computed, defineComponent, onMounted } from "vue";
import { uploadImage } from "@/api/public";
export default defineComponent({
  name: "UpdateImage",
  props: {
    fileList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    maxCount: {
      type: Number,
      default: 1,
    },
  },
  setup(props, { emit }) {
    let ZWJSBridge = window.ZWJSBridge;
    let afterRead = async (file) => {
      let formData = new FormData();
      formData.append("file", file.file);
      await uploadImage(formData).then((res) => {
        let newList = [...props.fileList, res.data.data.url];
        emit("update:fileList", newList);
      });
    };
    let beforeDelete = (file, detail) => {
      let fileList = props.fileList;
      fileList.splice(detail.index, 1);
      emit("update:fileList", fileList);
    };
    let nowFileList = computed(() => {
      return props.fileList.map((item) => {
        return {
          url: item,
        };
      });
    });
    let showZlbUpload = computed(() => {
      return process.env.NODE_ENV === "development"
        ? true
        : process.env.VUE_APP_Environment == "app"
        ? true
        : false;
    });
    let selfUpdata = () => {
      ZWJSBridge.chooseImage({
        upload: true,
      }).then((res) => {
        let newList = [...props.fileList, res.picPath];
        emit("update:fileList", newList);
      });
    };
    onMounted(() => {});

    return {
      selfUpdata,
      afterRead,
      nowFileList,
      beforeDelete,
      showZlbUpload,
    };
  },
});
</script>

<style scoped>
</style>