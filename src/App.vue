<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="container-fluid">
      <div class="row">
        <AppSilder></AppSilder>

        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <AppList></AppList>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppSilder from "./components/AppSilder.vue";
import AppList from "./components/AppList.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppSilder,
    AppList
  }
};
</script>

<style lang="scss">
</style>
