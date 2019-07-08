<template>
  <div id="app">
    <!--app-header-->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- app-silder -->
        <app-silder></app-silder>
        <!-- 路由对应组件显示的位置 -->
        <router-view></router-view>

      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";
import AppSilder from "./components/AppSilder.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppSilder
  }
};
</script>

<style lang="scss">
</style>
