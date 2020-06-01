<template>
  <div class="admin">
    <div class="ts left vertical fluid inverted animating menu sidebar">
      <div @click="menuclose()">
        <router-link to="/admin/dashboard">
          <h1 class="center aligned item" id="title">The shoP</h1>
        </router-link>
      </div>
      <!-- 個人資料項目 -->

      <div class="center aligned item">
        <img class="ts tiny circular image" src="/img/users.jpg" />
        <br />
        <br />
        <div>{{ email }}</div>
      </div>

      <!-- / 個人資料項目 -->

      <!-- 訂單 -->
      <div @click="menuclose()">
        <router-link to="/admin/orders" class="item">
          <i class="line chart icon"></i>
          商品訂單
        </router-link>
      </div>
      <!-- / 訂單 -->
      <!-- 回報處理 -->
      <div @click="menuclose()">
        <router-link to="/admin/products" class="item">
          <i class="block layout icon"></i>
          商品管理
        </router-link>
      </div>
      <!-- / 回報處理 -->
      <!-- 使用者管理 -->
      <div @click="menuclose()">
        <router-link to="/admin/profile" class="item">
          <i class="user icon"></i>
          使用者資訊
        </router-link>
      </div>
      <!-- / 使用者管理 -->

      <!-- 底部選單 -->
      <div class="bottom menu">
        <!-- 登出 -->
        <a href="#" class="item" @click="logout()">
          <i class="sign out icon"></i>
          登出
        </a>
        <!-- / 登出 -->
      </div>
      <!-- / 底部選單 -->
    </div>

    <!-- 可擠壓式的推動容器 -->
    <div class="squeezable pusher">
      <button
        class="ts inverted mini basic positive button"
        @click="menutoggle()"
      >
        -
      </button>
      <!-- 主要容器 -->
      <div class="ts narrow container">
        <div class="ts relaxed grid">
          <main>
            <router-view />
          </main>
        </div>
      </div>
      <!-- / 主要容器 -->

      <br />
    </div>
    <!-- / 可擠壓式的推動容器 -->
  </div>
</template>

<script>
import { fb, db } from "../firebase";
export default {
  data() {
    return {
      name: null,
      email: null,
    };
  },

  methods: {
    menutoggle() {
      ts(".left.inverted.sidebar").sidebar("toggle");
      ts("main").toggleClass("hide");
    },
    menuclose() {
      ts(".left.inverted.sidebar").sidebar("toggle");
      ts("main").toggleClass("hide");
    },
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  created() {
    let user = fb.auth().currentUser;
    this.email = user.email;
    this.name = user.name;
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 1024px) {
  .hide {
    display: none;
  }
}

#title {
  color: white;
  font-family: "homefont" !important;
}
.psher {
  background: transparent;
}
.pusher::before {
  content: "";
  background: url(/img/bg.jpg);
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background-size: cover;
}
.ts.menu.inverted::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background: url(https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  background-size: cover;
}
.ts.narrow.container {
  width: 100%;
  .ts.grid {
    justify-content: center;
    align-items: center;
    main {
      width: 100%;
    }
  }
}
</style>
