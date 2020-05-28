<template>
  <div class="footer">
    <a href="#">
      <img src="/img/logo.png" alt="" />
    </a>
    <h5 class="unstyled">此網站為練習使用</h5>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
  mounted: function() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  flex-direction: column;
  a {
    height: 100%;
    img {
      height: 100%;
      cursor: pointer;
    }
  }
  h5 {
    top: 70%;
    position: absolute;
    color: white;
  }
}
</style>
