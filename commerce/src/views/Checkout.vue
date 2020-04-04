<template>
  <div class="chekout">
    <Navbar></Navbar>

    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-md-8">
          <h4 class="py-4">Checkout page</h4>
          <ul>
            <li v-for="item in this.$store.state.cart" class="media pt-3">
              <img :src="item.productImage" width="80px" class="align-self-center mr-3" alt />
              <div class="media-body">
                <h5 class="mt-0">
                  {{item.productName}}
                  <span
                    class="float-right"
                    @click="$store.commit('removeFromCart',item)"
                  >X</span>
                </h5>
                <p class="mt-0">{{item.productPrice | currency}}</p>
                <p class="mt-0">Quantity : {{item.productQuantity }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <p>Total Price : {{ this.$store.getters.totalPrice | currency }}</p>

          <card
            class="stripe-card"
            :class="{ complete }"
            stripe="pk_test_XXXXXXXXXXXXXXXXXXXXXXXX"
            :options="stripeOptions"
            @change="complete = $event.complete"
          />

          <button class="pay-with-stripe btn btn-primary mt-4" @click="pay">Pay with credit card</button>

          <!-- </form> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
var stripe = Stripe("pk_test_C0J113v2HagE5sUkcWFGgZXj000rNKZU4s");

export default {
  data() {
    return {
      sessionId: ""
    };
  },

  methods: {
    pay() {
      let data = this.$store.state.cart.map(item => ({
        [item.productId]: item.productQuantity
      }));
      data = Object.assign({}, ...data);

      axios
        .get(
          "https://us-central1-vue-shop-65048.cloudfunctions.net/CheckoutSession",
          {
            params: {
              products: data
            }
          }
        )
        .then(response => {
          this.sessionId = response.data;
          console.log(response.data);
          stripe
            .redirectToCheckout({
              sessionId: this.sessionId.id
            })
            .then(function(result) {});
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {}
};
</script>



<style>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
/* .StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
} */
</style>

