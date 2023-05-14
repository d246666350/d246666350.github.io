<template lang="pug">
block content
  .tab_bar_layout
    router-view(v-slot="{ Component }")
      keep-alive
        component(:is="Component") 
    van-tabbar(
      route,
      :border="false",
      placeholder,
      active-color="#71a6ff",
      inactive-color="#999999"
    )
      van-tabbar-item(
        :to="item.path",
        v-for="(item, index) in tabbarList",
        :key="index",
        icon="home-o"
      ) {{ item.meta.title }}
        template(#icon="props")
          img.images(
            :src="props.active ? item.meta.active : item.meta.inactive"
          )
</template>

<script>
import { defineComponent, computed } from "vue";
import { tabBarRouterMap } from "@/config/tabBar";

export default defineComponent({
  name: "ordinaryLayout",
  setup() {
    let tabbarList = computed(() => {
      return tabBarRouterMap[0].children;
    });

    return {
      tabbarList,
    };
  },
});
</script>

<style lang="less" scoped>
.images {
  width: 25px;
  height: 25px;
}
.van-tabbar--fixed {
  box-shadow: 0px -2px 4px 0px rgba(153, 153, 153, 0.04);
}
</style>