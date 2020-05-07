<template>
  <div class="mid">
    <!-- <div
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
    </div> -->
    <div class="homepage">
      <iframe
        class="v1"
        allow="autoplay"
        frameborder="0"
        src="https://player.vimeo.com/video/349563345?background=1"
      >
      </iframe>
    </div>
    <div class="showcase">
      <div class="video-container">
        <video
          src="https://traversymedia.com/downloads/video.mov"
          autoplay
          muted
          loop
        ></video>
      </div>
      <div class="content" id="content">
        <h1>發生市集</h1>
        <h3>在這裡您能找到心儀的商品</h3>
      </div>
      <a href="#about" class="btn homebtn" id="homebtn"
        ><i class="fas fa-home"></i
      ></a>
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
    $(".homebtn").hover(
      function() {
        $("#content").addClass("move");
        $("#content").fadeOut();
        $("#content").css("z-index", "99");
        $(".v1").fadeIn();
      },
      function() {
        $(".v1").fadeOut();
        $("#content").fadeIn();
        $("#content").removeClass("move");
        $("#content").css("z-index", "99");
      }
    );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mid {
  width: 100%;
  height: 100vh;
  position: relative;
}
.page-header .content-center {
  margin-top: 0;
}

.homepage {
  width: 80%;
  height: 80%;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .v1 {
    display: none;
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -55%);
    height: 100%;
    width: 100%;
  }
}

h1 {
  font-weight: 300;
  font-size: 60px;
  line-height: 1.2;
  margin-bottom: 15px;
}

.showcase {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  // padding: 0 20px;
  position: relative;
}

.video-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  overflow: hidden;

  background: var(--primary-color)
    url("https://traversymedia.com/downloads/cover.jpg") no-repeat center
    center/cover;
}

.video-container video {
  width: 100%;
  height: 100%;
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  object-fit: cover;
}

.video-container:after {
  content: "";
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
}

.content {
  z-index: 99;
  writing-mode: vertical-tb;
}
.move {
  animation: moveup 2s forwards;
}
.homebtn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  height: 5rem;
  width: 5rem;
}

.btn {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -70%);
  padding: 10px 3px;
  background: var(--primary-color);
  color: #fff;
  z-index: 2;
  border: solid #fff 1px;
  border-radius: 5px;
  margin-top: 10px;
  opacity: 0.7;
  writing-mode: horizontal-tb;
}

@keyframes moveup {
  100% {
    transform: translate(0, -150%);
  }
}

@media screen and (max-width: 1024px) {
  .homebtn {
    display: none;
  }
}
</style>
