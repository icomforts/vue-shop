import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from "jquery";
import { fb } from "./firebase";
import VueFirestore from "vue-firestore";
// import BootstrapVue from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

require("firebase/firestore");
// Vue.use(BootstrapVue);
Vue.config.productionTip = false;

Vue.use(VueFirestore, {
  key: "id", // the name of the property. Default is '.key'.
  enumerable: true, //  whether it is enumerable or not. Default is true.
});

Vue.use(VueFirestore);

import VueFilters from "vue2-filters";
Vue.use(VueFilters);

window.$ = window.jQuery = jQuery;
import "popper.js";
// import "bootstrap";
// import "jquery.nicescroll";
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

Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("add-to-cart", require("./components/AddToCart.vue").default);
Vue.component("mini-cart", require("./components/MiniCart.vue").default);
Vue.component("Footer", require("./components/Footer.vue").default);
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
