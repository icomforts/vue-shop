<template>
  <div class="hello">
    <nav class="navbar">
      <div class="ham"><i class="angle double down icon"></i></div>
      <ul class="unstyled">
        <li id="logo">
          <a href="#" class="unstyled">
            <img src="/img/logo.png" alt="" />
          </a>
        </li>

        <li class="item">
          <a href="#products" class="unstyled">
            <i class="gift icon"></i>
            <span class="link-text">商品</span>
          </a>
        </li>

        <li class="item">
          <a @click="cart()" class="unstyled">
            <i class="cart icon"></i>
            <span class="link-text">購物車</span>
          </a>
        </li>
        <li class="item">
          <a @click="login()" class="unstyled">
            <i class=" user icon"></i>
            <span class="link-text">商品管理</span>
          </a>
        </li>
        <li class="item">
          <a @click="contact()" class="unstyled">
            <i class="comments icon"></i>
            <span class="link-text">聯絡我們</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  components: {},
  mounted: function() {
    ////滾輪桌布
    var transparent = true;
    $(window).scroll(function() {
      if ($(window).scrollTop() > $(".mid").height()) {
        $(".navbar").fadeIn();
      } else {
        $(".navbar").fadeOut();
      }
    });
  },
  methods: {
    login() {
      ts("#loginmodals").modal("show");
    },
    contact() {
      ts("#contactmodals").modal("show");
    },
    cart() {
      ts("#cartmodals").modal("show");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  opacity: 0;
}
.navbar {
  position: fixed;
  background: rgb(0, 0, 0);
  transition: all 600ms ease;
  overflow: hidden;
  z-index: 99;
  height: 2rem;
  width: 5rem;
  border: solid 2px rgb(119, 114, 114);
  border-radius: 0 0 10px 10px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.5;

  .ham {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    i {
      color: white;
    }
  }
  ul {
    height: 100%;
    width: 100%;
    #logo {
      img {
        position: absolute;
        left: 0;
        width: 150px;
      }
    }
    li {
      display: none;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: rgb(167, 167, 167);
        cursor: pointer;
        text-decoration: none;
        i {
          margin-bottom: 5px;
        }
      }
      a:hover {
        color: rgb(121, 120, 120);
      }
    }
  }
}
.navbar:hover {
  height: 5rem;
  width: 100%;
  border: none;
  opacity: 1;
  .ham {
    display: none;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    li {
      padding: 10px 0;
      height: 100%;
      list-style: none;
      display: flex;
      align-items: center;
    }
  }
}
@media only screen and (max-width: 767px) {
  .navbar:hover {
    .ham ul li a {
      font-size: 10px;
    }
  }
}
</style>
