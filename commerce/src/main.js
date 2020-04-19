import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from "jquery";
import { fb } from "./firebase";
import VueFirestore from "vue-firestore";

require("firebase/firestore");

Vue.use(VueFirestore, {
  key: "id", // the name of the property. Default is '.key'.
  enumerable: true, //  whether it is enumerable or not. Default is true.
});

Vue.use(VueFirestore);

import VueFilters from "vue2-filters";
Vue.use(VueFilters);

window.$ = window.jQuery = jQuery;
import "popper.js";
import "bootstrap";
// import "./paper-kit.js";
import "jquery.nicescroll";
import "./assets/app.scss";

import Swal from "sweetalert2";

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
});

window.Toast = Toast;
import store from "./store.js";

// Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("Navbar2", require("./components/Navbar2.vue").default);
Vue.component("add-to-cart", require("./components/AddToCart.vue").default);
Vue.component("mini-cart", require("./components/MiniCart.vue").default);
Vue.component("Mid2", require("./components/Mid2.vue").default);

Vue.component("products-list", require("./sections/ProductList.vue").default);

import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);

Vue.config.productionTip = false;

let app = "";

fb.auth().onAuthStateChanged(function(user) {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
