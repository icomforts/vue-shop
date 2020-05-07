<template>
  <div class="footer">
    <!-- Footer -->
    <footer>
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-lg-3 footer-about wow fadeInUp">
              <img
                class="logo-footer"
                src="https://cdn0.techbang.com/system/images/452264/original/3487db5a5e99a1edb03c3a02c05377bf.png?1533022751"
                alt="logo-footer"
                data-at2x="https://cdn0.techbang.com/system/images/452264/original/3487db5a5e99a1edb03c3a02c05377bf.png?1533022751"
              />
              <p>
                期望您在發生可以發現生活中的不一樣。
              </p>
              <p><a href="#">發生商店</a></p>
            </div>
            <div
              class="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown"
            >
              <h3>Contact</h3>
              <p><i class="fas fa-map-marker-alt"></i> XX市XX路XX號XX樓</p>
              <p><i class="fas fa-phone"></i> Phone: 0988815527</p>
              <p>
                <i class="fas fa-envelope"></i> Email:
                <a href="mailto:a1997228@gmail.com">a1997228@gmail.com</a>
              </p>
            </div>
            <div class="col-md-4 col-lg-4 footer-links wow fadeInUp">
              <div class="row">
                <div class="col">
                  <h3>Links</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <p><a class="scroll-link" href="#top-content">Top</a></p>
                  <p><a class="scroll-link" href="#section-1">Section 1</a></p>
                  <p><a class="scroll-link" href="#section-2">Section 2</a></p>
                  <p><a class="scroll-link" href="#section-3">Section 3</a></p>
                </div>
                <div class="col-md-6">
                  <p><a class="scroll-link" href="#section-4">Section 4</a></p>
                  <p><a href="#">Affiliates</a></p>
                  <p><a href="#">Terms</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-6 footer-copyright">
              &copy; Bootstrap Footer Template by
            </div>
            <div class="col-md-6 footer-social">
              <a href="#"><i class="fas fa-archive"></i></a>
              <a href="#"><i class="fas fa-heart"></i></a>
              <a href="#"><i class="fas fa-archive"></i></a>
              <a href="#"><i class="fas fa-cart-plus"></i></a>
              <a href="#"><i class="fas fa-user"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
  mounted: function() {
    function scroll_to(clicked_link, nav_height) {
      var element_class = clicked_link.attr("href").replace("#", ".");
      var scroll_to = 0;
      if (element_class != ".top-content") {
        element_class += "-container";
        scroll_to = $(element_class).offset().top - nav_height;
      }
      if ($(window).scrollTop() != scroll_to) {
        $("html, body")
          .stop()
          .animate({ scrollTop: scroll_to }, 1000);
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer-top {
  padding: 60px 0;
  text-align: left;
  color: #fff;
  color: rgba(255, 255, 255, 0.8);
  background: url("https://traversymedia.com/downloads/cover.jpg") no-repeat
    center center/cover;
}
.footer-top h3 {
  padding-bottom: 10px;
  color: #fff;
}

.footer-about img.logo-footer {
  max-width: 74px;
  margin-top: 0;
  margin-bottom: 18px;
}

.footer-contact p {
  word-wrap: break-word;
}
.footer-contact i {
  padding-right: 10px;
  font-size: 18px;
  color: #fff;
  color: rgba(255, 255, 255, 0.5);
}

.footer-links a {
  color: #fff;
  color: rgba(255, 255, 255, 0.8);
  border: 0;
}
.footer-links a:hover,
.footer-links a:focus {
  color: #fff;
}

.footer-bottom {
  padding: 15px 0 17px 0;
  background: #444;
  text-align: left;
  color: #aaa;
}

.footer-social {
  padding-top: 3px;
  text-align: right;
}
.footer-social a {
  margin-left: 20px;
  color: #777;
  border: 0;
}
.footer-social a:hover,
.footer-social a:focus {
  color: #79a05f;
  border: 0;
}
.footer-social i {
  font-size: 24px;
  vertical-align: middle;
  color: white;
}

.footer-copyright {
  padding-top: 5px;
}
.footer-copyright a {
  color: #fff;
  border: 0;
}
.footer-copyright a:hover,
.footer-copyright a:focus {
  color: #aaa;
  border: 0;
}
</style>
