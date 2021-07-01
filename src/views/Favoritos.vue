<template>
  <div class="favoritos pt-3">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h2 class="cart-title mb-4">Lista de Favoritos</h2>
        </b-col>
      </b-row>
      <b-row v-if="favorites.length !== 0" class="mb-5">
        <b-col cols="12">
          <FavoritesCard :products="favorites" />
        </b-col>
      </b-row>
      <b-row v-else class="mb-5">
        <b-col cols="12">
          <Empty />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FavoritesCard from "@/components/FavoritesCard.vue";
import Empty from "@/components/Empty.vue";
export default {
  name: "Categoria",
  components: {
    FavoritesCard,
    Empty,
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
