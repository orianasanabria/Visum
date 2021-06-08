<template>
  <div id="app">
    <MainNav />
    <router-view></router-view>
    <MainFooter />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
  components: {
    MainNav,
    MainFooter,
  },
};
</script>

<style lang="scss">
html {
  overflow-x: hidden;
  background-color: #1d2129;
}
#app {
  background-color: #1d2129;
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  color: #fff;
  min-height: 100vh;
}
</style>
