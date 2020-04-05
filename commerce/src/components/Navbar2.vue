<template>
  <div class="hello">
    <nav
      class="navbar navbar-expand-lg fixed-top navbar-transparent"
      color-on-scroll="300"
    >
      <div class="container">
        <div class="navbar-translate">
          <router-link class="navbar-brand" to="/">小小商店</router-link>
          <button
            class="navbar-toggler navbar-toggler-right navbar-burger"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-bar"></span>
            <span class="navbar-toggler-bar"></span>
            <span class="navbar-toggler-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="../index.html" class="nav-link"
                ><i class="nc-icon nc-layout-11"></i>Components</a
              >
            </li>
            <li class="nav-item">
              <a
                href="../documentation/tutorial-components.html"
                target="_blank"
                class="nav-link"
                ><i class="nc-icon nc-book-bookmark"></i> Documentation</a
              >
            </li>
          </ul>
          <a
            class="btn btn-outline-neutral btn-round"
            data-toggle="modal"
            data-target="#login"
            >Get Start</a
          >
          <a
            class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0"
            data-toggle="modal"
            data-target="#miniCart"
          >
            <i class="fas fa-cart-plus"></i>
          </a>
        </div>
      </div>
    </nav>

    <div
      class="page-header"
      data-parallax="true"
      style="background-image: url('/img/封面2.jpg');"
    >
      <div class="filter"></div>
      <div class="container">
        <div class="motto text-center">
          <h1>創造屬於你的家</h1>
          <h3>你心目中的家，是什麼樣子的呢?來小小商店打造屬於自己的家吧。</h3>
          <br />
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            class="btn btn-outline-neutral btn-round mr-3"
            ><i class="fa fa-play"></i>Watch video</a
          >
          <button type="button" class="btn btn-outline-neutral btn-round">
            Download
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media (min-width: 992px) {
  .navbar.custom-nav {
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: #fff !important;
  }
}
</style>
