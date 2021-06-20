import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    smartwatches: [],
    smartphones: [],
    notebooks: [],
    keyboards: [],
    bestSellers: [],
  },
  mutations: {
    getProducts(state, payload) {
      if (!payload) return;
      payload.map(el => {
        state.categories = el;
        state.banners = el.banners;
        state.smartwatches = el.smartwatches;
        state.smartphones = el.smartphones;
        state.notebooks = el.notebooks;
        state.keyboards = el.keyboards;
      });
    },
    modifyProducts(state) {
      Object.entries(state.categories).forEach(([key, value]) => {
        value.id = key;
        value.filter(el => {
          if (el.price) el.price = el.price.toLocaleString().replace(',', '.').replace(',', '.');
          if (el.bestSeller === true) state.bestSellers.push(el);
        })
      });
    }
  },
  actions: {
    async getData({
      commit
    }) {
      try {
        const url = "https://us-central1-icreatedthisapi.cloudfunctions.net/app/api/visum";
        const req = await axios(url);
        const data = req.data;
        commit("getProducts", data)
        commit("modifyProducts")
      } catch (error) {
        console.log("Commit error", error);
      }
    }
  },
})