<template>
  <div class="product-categorie">
    <b-row class="mb-5">
      <b-col class="imagewrapper" cols="12">
        <b-img class="image" src="img/bannercategorie.png" />
      </b-col>
    </b-row>
    <b-container>
      <b-row class="mb-5">
        <b-col cols="12">
          <MainCard :topSellers="topSellers" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MainCard from "@/components/MainCard.vue";
export default {
  name: "Categoria",
  components: {
    MainCard,
  },
  computed: {
    ...mapState(["topSellers"]),
  },
};
</script>

<style lang="scss" scoped>
.image {
  height: auto;
  width: 100%;
}
</style>
