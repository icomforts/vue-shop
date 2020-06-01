<template>
  <div class="hello">
    <button class="btn " @click="addToCart">
      <h1>放入購物車</h1>
    </button>
  </div>
</template>

<script>
export default {
  name: "add-to-cart",
  props: {
    pId: String,
    name: String,
    image: String,
    price: String,
  },
  data() {
    return {
      item: {
        productName: this.name,
        productImage: this.image,
        productPrice: this.price,
        productId: this.pId,
        productQuantity: 1,
      },
    };
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.item);
      Toast.fire({
        icon: "success",
        title: "成功加入購物車",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  margin: 10px 0;
  padding: 5px 10px;
  color: rgb(252, 252, 252);
  cursor: pointer;
  box-shadow: 0 5px 15px -5px #00000070;
  border: solid 1px white;
  border-radius: 15px;
  transition: all 0.2s linear;

  h1 {
    color: rgb(0, 113, 227);
    transition: all 0.2s linear;
  }
}
.btn:hover {
  background: rgb(0, 113, 227);
  border: none;
  transform: scale(1.1);

  h1 {
    color: rgb(255, 255, 255);
  }
}
</style>
