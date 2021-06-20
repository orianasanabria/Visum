<template>
  <div class="product-categorie">
    <b-row class="mb-5">
      <b-col cols="12">
        <b-img
          class="categorie-banner"
          :src="`../../img/${$route.params.id}.jpg`"
        />
      </b-col>
    </b-row>
    <b-container>
      <b-row class="mb-5">
        <b-col cols="12">
          <MainCard :products="getCategorie" />
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
    ...mapState(["categories"]),
    getCategorie() {
      let param = this.$route.params.id;
      if (param === "smartwatches") return this.categories.smartwatches;
      else if (param === "smartphones") return this.categories.smartphones;
      else if (param === "notebooks") return this.categories.notebooks;
      else if (param === "keyboards") return this.categories.keyboards;
      else return;
    },
  },
  mounted() {
    this.getCategorie;
  },
};
</script>

<style lang="scss" scoped>
.categorie-banner {
  height: auto;
  min-height: 7rem;
  object-position: right;
  object-fit: cover;
  width: 100%;
}
</style>
