<template>
  <div class="hello">
    <nav
      class="navbar navbar-expand-md fixed-top navbar-transparent"
      color-on-scroll="150"
    >
      <div class="container">
        <div class="navbar-translate">
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
          <a class="navbar-brand" href="https://www.creative-tim.com"
            >五月花商店</a
          >
        </div>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav ml-auto"></ul>
          <form class="form-inline my-2 my-lg-0">
            <a
              class="btn btn-outline-success my-2 my-sm-0"
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
            <b-button pill>Button</b-button>
          </form>
        </div>
      </div>
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
      if ($(window).scrollTop() > $(".navbar").attr("color-on-scroll")) {
        if (transparent) {
          transparent = false;
          $(".navbar[color-on-scroll]").removeClass("navbar-transparent");
        }
      } else {
        if (!transparent) {
          transparent = true;
          $(".navbar[color-on-scroll]").addClass("navbar-transparent");
        }
      }
    });

    ///RWD NAVBAR
    $(document).on("click", ".navbar-toggler", function() {
      if (pk.misc.navbar_menu_visible == 1) {
        $("html").removeClass("nav-open");
        pk.misc.navbar_menu_visible = 0;
        setTimeout(function() {
          $(".navbtn").removeClass("toggled");
          $("#bodyClick").remove();
        }, 550);
      } else {
        setTimeout(function() {
          $(".navbtn").addClass("toggled");
        }, 580);

        $("html").addClass("nav-open");
        pk.misc.navbar_menu_visible = 1;
      }
    });

    var pk = {
      misc: {
        navbar_menu_visible: 0,
      },

      initPopovers: function() {
        if ($('[data-toggle="popover"]').length != 0) {
          $("body").append('<div class="popover-filter"></div>');

          //    Activate Popovers
          $('[data-toggle="popover"]')
            .popover()
            .on("show.bs.popover", function() {
              $(".popover-filter").click(function() {
                $(this).removeClass("in");
                $('[data-toggle="popover"]').popover("hide");
              });
              $(".popover-filter").addClass("in");
            })
            .on("hide.bs.popover", function() {
              $(".popover-filter").removeClass("in");
            });
        }
      },
      initCollapseArea: function() {
        $('[data-toggle="pk-collapse"]').each(function() {
          var thisdiv = $(this).attr("data-target");
          $(thisdiv).addClass("pk-collapse");
        });

        $('[data-toggle="pk-collapse"]')
          .hover(
            function() {
              var thisdiv = $(this).attr("data-target");
              if (!$(this).hasClass("state-open")) {
                $(this).addClass("state-hover");
                $(thisdiv).css({
                  height: "30px",
                });
              }
            },
            function() {
              var thisdiv = $(this).attr("data-target");
              $(this).removeClass("state-hover");

              if (!$(this).hasClass("state-open")) {
                $(thisdiv).css({
                  height: "0px",
                });
              }
            }
          )
          .click(function(event) {
            event.preventDefault();

            var thisdiv = $(this).attr("data-target");
            var height = $(thisdiv)
              .children(".panel-body")
              .height();

            if ($(this).hasClass("state-open")) {
              $(thisdiv).css({
                height: "0px",
              });
              $(this).removeClass("state-open");
            } else {
              $(thisdiv).css({
                height: height + 30,
              });
              $(this).addClass("state-open");
            }
          });
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @media (max-width: 992px) {
//   .navbar.custom-nav {
//     padding-top: 16px;
//     padding-bottom: 16px;
//     background-color: #fff !important;
//   }
// }

@media screen and(max-width: 992px) {
  .navbar-toggler {
    float: right;
  }
  #navbtn {
  }
}
</style>
