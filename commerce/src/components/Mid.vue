<template>
  <div class="mid">
    <div class="hero ">
      <img
        src="https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?cs=srgb&dl=pexels-264547.jpg&fm=jpg"
        alt=""
      />
      <div class="headline unstyled">
        <h1>The</h1>
        <h1>shoP</h1>
      </div>
      <div class="downarrow">
        <a href="#products" class="unstyled">
          <svg
            class="unstyled"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="-20 0 550 500"
            style="enable-background:new 0 0 490.656 490.656;"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M487.536,216.467c-4.16-4.16-10.923-4.16-15.083,0L245.339,443.581L18.203,216.467c-4.16-4.16-10.923-4.16-15.083,0
			c-4.16,4.16-4.16,10.923,0,15.083l234.667,234.667c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.115l234.667-234.667
			C491.696,227.389,491.696,220.627,487.536,216.467z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M487.536,24.445c-4.16-4.16-10.923-4.16-15.083,0L245.339,251.581L18.203,24.467c-4.16-4.16-10.923-4.16-15.083,0
			c-4.16,4.16-4.16,10.923,0,15.083l234.667,234.667c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.136L487.536,39.528
			C491.696,35.368,491.696,28.605,487.536,24.445z"
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="slider"></div>
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
      $(".hello").css(
        "opacity",
        $(window).scrollTop() / parseInt($(".mid").css("height"))
      );
    });
    const t1 = new TimelineMax();
    t1.fromTo(
      $(".hero"),
      { height: "0%" },
      { height: "100%", duration: 1, ease: "power2.inout" }
    )
      .fromTo(
        $(".hero"),
        { width: "80%" },
        { width: "100%", duration: 1.2, ease: "power2.inout" }
      )
      .fromTo(
        $(".slider"),
        { x: "-100%" },
        { x: "0%", duration: 1.2, ease: "power2.inout" },
        "-=1.2"
      )
      .fromTo(
        $(".headline"),
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.inout" },
        "-=0.5"
      )
      .fromTo(
        $(".downarrow"),
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.inout" },
        "-=0.5"
      );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mid {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.hero {
  position: relative;
}
.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.1;
}
.hero .downarrow {
  position: absolute;
  width: 100px;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -70%);
  cursor: pointer;
  width: 100px;
  height: 100px;
  svg {
    width: 100px;
    height: 100px;
  }
}

.hero .downarrow svg path {
  fill: transparent;
  stroke-width: 10;
  stroke: rgb(255, 255, 255);
  stroke-dasharray: 1560;
  stroke-dashoffset: 1560;
  animation: icon 3s linear infinite;
}

@keyframes icon {
  0% {
    stroke-dashoffset: 0;
  }
  40% {
    stroke-dashoffset: 1560;
  }
  80% {
    stroke-dashoffset: 3120;
  }
  100% {
    stroke-dashoffset: 3120;
    fill: white;
  }
}

.headline {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -60%) !important;
  z-index: 3;
  h1 {
    font-size: 160px;
    color: white;
    font-family: "homefont" !important;
  }
}
.hero::after {
  content: "";
  background: black;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  opacity: 0.3;
  top: 0;
  pointer-events: none;
}
.slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgb(54, 39, 39);
  z-index: -1;
}
@media screen and(min-width: 1441px) {
  .headline {
    h1 {
      font-size: 250px;
    }
    top: 40%;
  }
}
@media only screen and (max-width: 1024px) {
  .headline {
    h1 {
      font-size: 145px;
    }
  }
}
@media only screen and (max-width: 767px) {
  .headline {
    h1 {
      font-size: 64px;
    }
  }
  .hero {
    .downarrow {
      top: 60%;
    }
  }
}
</style>
