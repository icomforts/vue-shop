<template>
  <div class="products">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Products Page</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, ducimus.</p>
          </div>
          <div class="col-md-6">
            <img src="/img/svg/overview.svg" alt class="img-fluid" />
          </div>
        </div>
      </div>
      <hr />
      <h3>商品管理</h3>
      <p>新增、刪除、修改您的產品。</p>
      <div class="produuct-test">
        <div class="form-group">
          <input
            type="text"
            placeholder="產品名稱"
            v-model="product.name"
            class="form-control col-md-3"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="產品價格"
            v-model="product.price"
            class="form-control col-md-3 justify-content-center"
          />
        </div>
        <div class="form-group">
          <button @click="saveData" class="btn btn-primary">保存</button>
        </div>
        <hr />

        <h3>產品列表</h3>

        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>名稱</th>
                <th>價格</th>
                <th>修改</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="product in products">
                <td>{{product.data().name}}</td>
                <td>{{product.data().price}}</td>
                <td>
                  <button class="btn btn-primary">Edit</button>
                  <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from '../firebase'

export default {
  name: "Products",
  props: {
    msg: String
  },

  data() {
    return {
      products: [],
      product: {
        name: null,
        price: null

      }
    }
  },
  methods: {
    deleteProduct(doc) {
      if (confirm('確定要刪除此項目嗎?')) {
        db.collection("products").doc(doc).delete().then(function () {
          console.log("Document successfully deleted!");
        }).catch(function (error) {
          console.error("Error removing document: ", error);
        });
      } else {

      }
    },
    readData() {
      db.collection("products").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.products.push(doc);
        })
      })
    },
    saveData() {
      db.collection("products").add(this.product)
        .then((docRef) => {
          alert("成功");
          console.log("寫入ID:", docRef.id);
          this.readData();
          this.reset();
        })
        .catch(function (erroe) {
          console.error("保存錯誤:", error);
        })
    },
    reset() {
      Object.assign(this.$data, this.$options.data.apply(this))
    }
  },
  created() {
    this.readData();
  }
};
</script>
// 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
