<template>
  <div class="home">
    <div class="scrollbar"><div class="scrollbar-thumb"></div></div>
    <Navbar2></Navbar2>
    <Mid />
    <Mid2 />
    <products-list />
    <login></login>
    <mini-cart></mini-cart>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Mid from "@/components/Mid.vue";
import Mid2 from "@/components/Mid2.vue";
import Footer from "@/components/Footer.vue";
// import Products from '@/sections/Products.vue'
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Mid,
    Login,
  },
  mounted: function() {
    // $("body").niceScroll(); //scrollbar
  },
};
</script>

<style></style>
