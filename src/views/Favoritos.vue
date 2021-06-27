<template>
  <div class="favoritos my-5">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h2 class="cart-title mb-4">Lista de Favoritos</h2>
        </b-col>
      </b-row>
      <b-row class="mb-5">
        <b-col cols="12">
          <FavoritesCard :products="favorites" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FavoritesCard from "@/components/FavoritesCard.vue";
export default {
  name: "Categoria",
  components: {
    FavoritesCard,
  },
  computed: {
    ...mapState(["favorites"]),
  },
};
</script>

<style scoped>
.favoritos {
  min-height: 66vh;
}
</style>
