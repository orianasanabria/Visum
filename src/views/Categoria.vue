<template>
  <div class="product-categorie">
    <b-row class="mb-5">
      <b-col cols="12">
        <b-img class="categorie-banner" src="img/bannercategorie.png" />
      </b-col>
    </b-row>
    <b-container>
      <b-row class="mb-5">
        <b-col cols="12">
          <MainCard :products="smartwatches" />
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
    ...mapState(["smartwatches"]),
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
