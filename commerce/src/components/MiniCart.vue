<template>
  <div class="mini-cart">
    <div class="ts modals dimmer">
      <dialog id="cartmodals" class="ts basic modal closable" open>
        <div class="content">
          <div class="loading2">
            <i class="big loading spinner icon"></i>
          </div>
          <h1>
            全部帶回家
            <i class="shopping basket icon"></i>
          </h1>
          <div class="ts list">
            <div class="item" v-for="item in this.$store.state.cart">
              <img :src="item.productImage" width="80px" />
              <div class="media">
                <h5>
                  {{ item.productName }}
                </h5>
                <p><i class="dollar icon"></i>{{ item.productPrice }}</p>
                <p>數量 : {{ item.productQuantity }}</p>
              </div>
              <span class="" @click="$store.commit('removeFromCart', item)"
                ><i class="remove icon"></i
              ></span>
            </div>
          </div>
          <button class="ts pulsing basic button buy" @click="pay()">
            買單!
          </button>
        </div>
      </dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios";
var stripe = Stripe("pk_test_C0J113v2HagE5sUkcWFGgZXj000rNKZU4s");
export default {
  name: "MiniCart",
  props: {
    msg: String,
  },
  data() {
    return {
      sessionId: "",
    };
  },
  methods: {
    checkout() {
      this.$router.push("/checkout");
    },
    pay() {
      let data = this.$store.state.cart.map((item) => ({
        [item.productId]: item.productQuantity,
      }));
      data = Object.assign({}, ...data);

      axios
        .get(
          "https://us-central1-vue-shop-65048.cloudfunctions.net/CheckoutSession",
          {
            params: {
              products: data,
            },
          }
        )
        .then((response) => {
          this.sessionId = response.data;
          console.log(response.data);
          stripe
            .redirectToCheckout({
              sessionId: this.sessionId.id,
            })
            .then(function(result) {});
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal {
  height: 50vh;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .content {
    border-radius: 15px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .buy {
      background: rgb(0, 113, 227) !important;
      color: white !important;
    }
    .loading2 {
      visibility: hidden;
      background: rgba(0, 0, 0, 0.507);
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9;
      width: 100%;
      height: 100%;
    }
    .list .item {
      display: grid;
      grid-template-columns: 0.5fr 1fr 0.5fr;
      border-bottom: solid 1px rgba(165, 165, 165, 0.726);

      list-style: none !important;
      .media {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        h5 {
          color: rgb(0, 0, 0);
          grid-row: 1/4;
          grid-column: 1/3;
          align-self: center;
          margin-bottom: 0;
          padding-bottom: 2px;
        }
        p {
          justify-self: center;
          font-size: 1.2rem;
          margin-top: 0 !important;
        }
      }
      span {
        justify-self: end;
        i {
          cursor: pointer;
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
