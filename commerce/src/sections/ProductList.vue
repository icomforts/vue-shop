<template>
  <div class="products" id="products">
    <div class="test" v-for="product in products">
      <div class="info">
        <h1>{{ product.name }}</h1>

        <p>
          {{ product.description }}
        </p>
        <h3><i class=" small dollar icon"></i>{{ product.price }}</h3>
        <add-to-cart
          :image="getImage(product.images)"
          :p-id="product.id"
          :price="product.price"
          :name="product.name"
        >
        </add-to-cart>
      </div>
      <carousel
        class="img"
        :perPage="1"
        :autoplay="true"
        :loop="true"
        :paginationEnabled="false"
      >
        <slide v-for="(image, index) in product.images" class="slider">
          <img :src="image" class="img2" />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";

export default {
  name: "Products-list",
  props: {
    msg: String,
  },

  data() {
    return {
      products: [],
    };
  },

  methods: {
    getImage(images) {
      return images[0];
    },
  },

  firestore() {
    return {
      products: db.collection("products"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.test {
  height: 100vh;
  display: flex;
  h3 {
    color: rgb(59, 52, 52);
  }
  .info {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      width: 80%;
      font-size: 1.2rem;
    }
  }

  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;

    .slider {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .img2 {
      width: 572px;
      height: 572px;
    }
  }
}
.test:nth-child(odd) {
  h1,
  h3,
  p {
    color: white;
  }
  background: rgb(59, 52, 52);
}
</style>
