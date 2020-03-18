<template>
  <div class="home">
    <Navbar></Navbar>
    <Hero />
    <Products />
    <login></login>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import Products from '@/sections/Products.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Products,
    Login
  }
}
</script>
