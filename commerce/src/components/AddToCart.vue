<template>
  <div class="hello">
    <button class="btn btn-default" @click="addToCart">購物車</button>
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
<style scoped lang="scss"></style>
