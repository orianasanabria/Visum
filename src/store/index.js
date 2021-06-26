import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import {
  db
} from "../config/firebase";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    smartwatches: [],
    smartphones: [],
    notebooks: [],
    keyboards: [],
    bestSellers: [],
    selectedProduct: [],
    shoppingCart: [],
    favorites: [],
  },
  mutations: {
    getCategories(state, payload) {
      if (!payload) return;
      payload.map(el => {
        state.categories = el;
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
          // if (el.price) el.price = el.price.toLocaleString().replace(',', '.').replace(',', '.');
          if (el.bestSeller === true) state.bestSellers.push(el);
        })
      });
    },
    getProduct(state, payload) {
      if (!payload) return;
      const product = payload;
      state.selectedProduct = product;
    },
    getPicture(state, payload) {
      if (!payload) return;
      const picture = payload;
      state.selectedProduct.img = picture;
    },
    buyProduct(state, payload) {
      if (!payload) return;
      const quantity = 1;
      const id = payload.id;
      const img = payload.img;
      const name = payload.name;
      const spec = payload.spec;
      const price = payload.price;
      const total = price * quantity;

      const exists = state.shoppingCart.find((el) => el.id === id);
      if (!exists) {
        const soldProduct = {
          id: id,
          quantity,
          img,
          name,
          spec,
          price,
          total
        };
        state.shoppingCart.push(soldProduct);
        console.log("doesnt exist", soldProduct);
      } else {
        exists.quantity = exists.quantity + quantity;
        exists.total = exists.total + price;
        console.log("exists", exists.quantity, exists.total);
      }
    },
    deleteProduct(state, payload) {
      if (!payload) return;
      const newCart = state.shoppingCart.filter(el => payload.id !== el.id)
      let confirmDelete = confirm(`¿Seguro que desea eliminar el ${payload.name} de su carrito de compras?`);
      if (confirmDelete === true) {
        state.shoppingCart = newCart
      } else return;
    },
    getFavoritesLocal(state, payload) {
      state.favorites = payload;
      console.log(payload);
    },
    addFavoriteLocal(state, payload) {
      const exists = state.favorites.find(el => el.id === payload.id)
      if (!exists) state.favorites.push(payload)
      console.log("add", payload);
    },
    deleteFavoriteLocal(state, payload) {
      state.favorites = payload;
      console.log("delete", payload);
    },
  },
  actions: {
    async getData({
      commit
    }) {
      try {
        const url = "https://us-central1-icreatedthisapi.cloudfunctions.net/app/api/visum";
        const req = await axios(url);
        const data = req.data;
        commit("getCategories", data)
        commit("modifyProducts")
      } catch (error) {
        console.log("Commit error", error);
      }
    },
    async getFavorites({
      commit,
      state
    }) {
      try {
        const snapshot = await db.collection("favorites").get();
        const favorites = [];
        snapshot.forEach((doc) => {
          let docData = doc.data();
          docData.id = doc.id;
          favorites.push(docData);
        })
        state.favorites = favorites;
        const eachFavorite = favorites.map(obj => obj)
        commit("getFavoritesLocal", eachFavorite)
      } catch (error) {
        console.log(error);
      }
    },
    async toggleFavorite({
      commit,
      state
    }, payload) {
      if (!payload) return;
      const favorite = payload;
      const dbFavorite = db.collection("favorites").doc(favorite.id);

      const favoriteExists = state.favorites.filter(el => el.id === favorite.id);
      const newFavorites = state.favorites.filter(el => el.id != favorite.id);

      if (favoriteExists.length !== 0) {
        db.collection("favorites").doc(favorite.id).delete();
        commit("deleteFavoriteLocal", newFavorites);
      } else {
        commit("addFavoriteLocal", favorite)
        await dbFavorite.set(favorite)
      }
    },

  },
})