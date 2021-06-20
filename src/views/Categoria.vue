<template>
  <div class="product-categorie">
    <div v-if="categorie">
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
            <MainCard :products="categorie" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div v-else>
      <NotFound />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MainCard from "@/components/MainCard.vue";
import NotFound from "@/views/NotFound.vue";
export default {
  name: "Categoria",
  components: {
    MainCard,
    NotFound,
  },
  computed: {
    ...mapState(["categories"]),
    categorie() {
      let param = this.$route.params.id;
      if (param === "smartwatches") return this.categories.smartwatches;
      else if (param === "smartphones") return this.categories.smartphones;
      else if (param === "notebooks") return this.categories.notebooks;
      else if (param === "keyboards") return this.categories.keyboards;
      else return;
    },
  },
  mounted() {
    this.categorie;
  },
};
</script>