<template>
  <div class="mid">
    <div
      class="page-header"
      data-parallax="true"
      style="background-image: url('/img/封面2.jpg'); "
    >
      <div class="filter"></div>
      <div class="content-center">
        <div class="container">
          <div class="motto text-center">
            <h1 class="presentation-title">發生市集</h1>
            <div class="fog-low"></div>
            <div class="fog-low right"></div>
          </div>
          <h2 class="motto presentation-subtitle text-center">
            在這裡您能找到心儀的商品
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mid",
  props: {
    msg: String,
  },
  mounted: function() {
    $(window).scroll(function() {
      let a = $(window).scrollTop();
      let b = parseInt($(".mid").css("height"));
      $(".page-header").css(
        "opacity",
        1 - $(window).scrollTop() / parseInt($(".mid").css("height"))
      );
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mid {
  width: 100%;
  height: 100vh;
}
.page-header .content-center {
  margin-top: 0;
}

@keyframes move {
  0% {
    transform: scale(1.3, 1.3);
    opacity: 0.5;
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
</style>
