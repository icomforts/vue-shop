<template>
  <div class="mid">
    <div class="hero">
      <img src="/img/shopcart.jpg" alt="" >
      <h1 class="headline">T h e<br>s h o P</h1>
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
    t1.fromTo($(".hero"),{height:"0%"},{height:"100%",duration:1,ease:"power2.inout"})
      .fromTo($(".hero"),1.2,{width:"100%"},{width:'80%',ease:"power2.inout"})
      .fromTo($(".slider"),1.2,{x:"-100%"},{x:'0%',ease:Power2.easeInOut},"-=1.2")
      .fromTo($(".headline"),0.5,{opacity:0,x:30},{opacity:1,x:0},"-=0.5")

    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mid{
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
.hero{
    height: 60%;
    width: 100%;
    position: relative;
}
.hero img {
    width: 100%;
    top: 10%;
    height: 90%;
    object-fit: cover;
    opacity: 0.3;
}

.headline{
    position: absolute;
    top: 40%;
    left: 50%;
    font-size: 160px;
    transform: translate(-50%,-50%) !important;
    color: white;
    z-index: 3;
    font-family: "homefont" !important;

}
.hero::after{
    content: "";
    background: black;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    opacity: 0.3;
    top: 0;
}
.slider{
    position: absolute;
    top: 0;
    left: 0;        
    width: 100%;
    height: 100vh;
    background: black;
    z-index: -1;
}

</style>
