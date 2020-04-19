<template>
  <div class="products" id="products">
    <div class="container">
      <h1 class="text-center p-5">THE STORIES</h1>
      <div class="row">
        <div class="col-md-6" v-for="product in products">
          <div class="card product-item">
            <carousel
              :perPage="1"
              :autoplay="true"
              :loop="true"
              :paginationEnabled="false"
            >
              <slide v-for="(image, index) in product.images">
                <img
                  :src="image"
                  class="card-img-top"
                  alt="..."
                  width="250px"
                  height="300px"
                />
              </slide>
            </carousel>

            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title">{{ product.name }}</h5>
                <h5 class="card-prices">{{ product.price | currency }}</h5>
              </div>

              <add-to-cart
                :image="getImage(product.images)"
                :p-id="product.id"
                :price="product.price"
                :name="product.name"
              >
              </add-to-cart>
            </div>
          </div>
        </div>
      </div>
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
.products {
  // margin-top: 7rem;
  background-color: #edecec;
  padding-bottom: 3rem;
}
h1 {
  margin-top: 0;
}
</style>
