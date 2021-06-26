<template>
  <div id="app">
    <MainNav />
    <router-view class="main"></router-view>
    <MainFooter />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import MainFooter from "@/components/MainFooter.vue";
import { mapActions } from "vuex";
export default {
  components: {
    MainNav,
    MainFooter,
  },
  methods: {
    ...mapActions(["getData", "getFavorites"]),
  },
  created() {
    this.getData();
    this.getFavorites();
  },
};
</script>
