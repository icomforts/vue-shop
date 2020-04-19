<template>
  <div class="mid">
    <div
      class="page-header"
      data-parallax="true"
      style="background-image: url('/img/封面2.jpg'); "
    >
      <div class="filter"></div>
      <div class="container">
        <div class="motto text-center">
          <h1>歡迎光臨</h1>
          <h3>期待您能在五月花商店找到屬於您的商品</h3>
          <br />
          <!-- <a href="/" class="btn btn-outline-neutral btn-round mr-3"
            ><i class="fa fa-play"></i>了解更多</a
          > -->
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
  // padding-top: 7rem;
  width: 100%;
  height: 100vh;
  text-align: left;
}
.page-header {
  // animation: move 8s infinite;
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
