<template>
  <div class="home">
    <Navbar></Navbar>
    <Hero />
    <ProductList />
    <login></login>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import ProductList from '@/sections/ProductList.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    ProductList,
    Login
  }
}
</script>
