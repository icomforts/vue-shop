<template>
  <div class="mid2">
    <aside id="tagline" class="woven-tagline">
      <div class=" container group">
        <div class="col-sm-6 ">
          <h1>發現 <em>&</em> 生活</h1>
        </div>
        <div class="col-sm-6 qwe">
          <h2>關於我們</h2>
          <p>
            點綴生活的美好小物,希望發生市集能滿足您的需求.
          </p>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "Mid2",
  props: {
    msg: String,
  },
  mounted: function() {
    //
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.qwe {
  float: right;
  // align-items: top;
}
.container {
  display: flex;
  color: whitesmoke;
}

.woven-tagline {
  background: linear-gradient(#000000, #000000ce);
  padding: 75px 0;
  z-index: 5;
}

.woven-tagline h1 {
  font-size: 50px;
  font-weight: 800;
  margin: 0px;
}

.woven-tagline h1 em {
  font-weight: 400;
}

.woven-tagline h2 {
  font-family: "p22-underground", sans-serif;
  font-size: 32px;
  font-weight: 800;
  margin: 0 0 5px 0;
  text-transform: uppercase;
}

.woven-tagline p {
  font-size: 20px;
  line-height: 1.4;
}
</style>
