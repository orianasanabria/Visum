import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topSellers: [{
        title: "APPLE WATCH S6",
        img: "img/applewatch.png",
        desc: "Apple Watch S6 42mm White. Frecuencia Cardiaca más poderosa, y un altímetro integrado.",
        specs: ["42mm", "ECG2"],
        price: "289.990",
      },
      {
        title: "DELL XPS 13 FHD",
        img: "img/dellxps.png",
        desc: 'Dell® Notebook 2en1 | 13.4" FHD Intel i7-1165G7 16GB 512GB SSD Intel Iris Xe Wi-Fi 6 Windows 10 Pro Black',
        specs: ['13.4"', "512GB "],
        price: "1.745.990",
      },
      {
        title: "IPHONE 12 PRO",
        img: "img/iphone12.png",
        desc: "Color Grafito. Chip A14 Bionic. Pantalla Super Retina XDR. Modo Noche en todas las cámaras.",
        specs: ['6.1"', "128GB"],
        price: "869.990",
      },
      {
        title: "RAZER BLADE 15",
        img: "img/razer.png",
        desc: "Portátil para juegos más pequeño del mundo de 15,6 pulgadas – NVIDIA GeForce GTX 1070 Max-Q",
        specs: ['15.6"', "1TB"],
        price: "2.249.990",
      },
      {
        title: "MECHA SF EMERALD",
        img: "img/emerald.png",
        desc: "Teclado Mecánico de 65%, acabado iridiscente especial en carcasa de aluminio",
        specs: ["65%", "Cherry MX"],
        price: "129.990",
      },
      {
        title: "GALAXY WATCH3",
        img: "img/galaxywatch.png",
        desc: "El monitor de salud más avanzado en un smartwatch. Pantalla más grande, ligera y fina.",
        specs: ["44mm", "ECG"],
        price: "194.990",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {}
})