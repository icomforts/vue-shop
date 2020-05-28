<template>
  <div class="home">
    <Navbar></Navbar>
    <Mid />
    <products-list />
    <login></login>
    <contact></contact>
    <mini-cart></mini-cart>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Mid from "@/components/Mid.vue";
import Footer from "@/components/Footer.vue";
import Contact from "@/components/Contact.vue";
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Mid,
    Login,
    Contact,
  },
  mounted: function() {},
};
</script>

<style></style>
