<template>
  <div class="products">
    <div class="ts modals dimmer">
      <dialog id="modal" class="ts basic modal" open>
        <i class="close icon"></i>
        <div class="ts icon header"><i class="smile icon"></i> 新增產品</div>
        <div class="content">
          <div class="inputs">
            <div class="ts mini basic input">
              <input
                type="text"
                placeholder="產品名稱"
                v-model="product.name"
              />
            </div>
            <div class="ts mini basic input">
              <input
                type="text"
                placeholder="產品售價"
                v-model="product.price"
              />
            </div>
            <div class="ts mini basic input">
              <input
                type="text"
                @keyup.enter="addTag"
                placeholder="產品標籤"
                v-model="tag"
              />
            </div>
            <div class="ts mini resizable basic input">
              <textarea
                type="text"
                placeholder="產品簡介"
                v-model="product.description"
              />
            </div>
            <div class="upfile">
              <label for="product_image">產品圖</label>
              <input type="file" @change="uploadImage" />
            </div>
          </div>
          <div class="six wide column">
            <div class="showimg">
              <div
                class="ts mini image"
                v-for="(image, index) in product.images"
              >
                <img :src="image" />
                <i
                  class="mini delete icon"
                  @click="deleteImage(image, index)"
                ></i>
              </div>
            </div>
            <!-- 產品demo -->
            <div class="ts top attached info segment">
              <div class="ts large header">{{ product.name }}</div>
              <div class="ts mini header">
                <p v-for="tag in product.tags">{{ tag }},</p>
              </div>
            </div>
            <div class="ts attached segment">
              <div class="ts single line items">
                <!-- 單個項目 -->
                <div class="item">
                  <div
                    class="ts tiny image"
                    v-for="(image, index) in product.images"
                    v-if="index < 1"
                  >
                    <img :src="image" />
                  </div>
                  <div class="content">
                    <a class="header">${{ product.price }}</a>
                    <div class="description">
                      {{ product.description }}
                    </div>
                  </div>
                </div>
                <!-- / 單個項目 -->
              </div>
            </div>

            <!-- / 產品demo -->
          </div>
        </div>
        <div class="actions">
          <button class="ts inverted basic deny button">
            不
          </button>
          <button
            class="ts inverted basic positive button"
            @click="addProduct()"
          >
            新增
          </button>
          <button
            class="ts inverted basic positive button"
            @click="updateProduct()"
          >
            保存
          </button>
        </div>
      </dialog>
    </div>
    <!-- 主要片段 -->
    <div
      class="ts center aligned attached vertically very padded secondary segment"
    >
      <button @click="addNew" class="ts basic primary circular button new">
        新增產品
      </button>
      <!-- 容器 -->
      <div class="ts narrow container">
        <!-- 卡片群組 -->
        <div class="ts stackable two flatted cards">
          <!-- 單個卡片 -->
          <div class="ts card cardp" v-for="product in products">
            <div v-for="(image, index) in product.images" v-if="index < 1">
              <img :src="image" alt="" class="image" />
            </div>
            <div class="left aligned content">
              <div class="description">
                <h5 class="unstyled">{{ product.name }}</h5>
                <h5 class="unstyled">${{ product.price }}</h5>
              </div>
              <div class="ts fluid bottom attached buttons">
                <button class="ts  button " @click="editProduct(product)">
                  <i class="edit icon"></i>
                </button>
                <div class="or" data-text="Or"></div>
                <button
                  class="ts negative button"
                  @click="deleteProduct(product)"
                >
                  <i class="delete icon"></i>
                </button>
              </div>
            </div>
          </div>
          <!-- / 單個卡片 -->
        </div>
        <!-- / 卡片群組 -->
      </div>
      <!-- / 容器 -->
    </div>
    <!-- / 主要片段 -->
  </div>
</template>

<script>
import { fb, db } from "../firebase";

export default {
  name: "Products",
  components: {},
  props: {
    msg: String,
  },

  data() {
    return {
      products: [],
      product: {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: [],
      },
      activeItem: null,

      tag: null,
    };
  },

  firestore() {
    return {
      products: db.collection("products"),
    };
  },
  methods: {
    deleteImage(img, index) {
      let image = fb.storage().refFromURL(img);

      this.product.images.splice(index, 1);

      image
        .delete()
        .then(function() {
          console.log("image deleted");
        })
        .catch(function(error) {
          // Uh-oh, an error occurred!
          console.log("an error occurred");
        });
    },
    addTag() {
      this.product.tags.push(this.tag);
      this.tag = "";
    },
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];

        var storageRef = fb
          .storage()
          .ref("products/" + Math.random() + "_" + file.name);

        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...

            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.product.images.push(downloadURL);
            });
          }
        );
      }
    },
    reset() {
      this.product = {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: [],
      };
    },

    addNew() {
      // this.modal = "new";
      // $("#product").modal("show");
      this.reset();
      ts("#modal").modal("show");
    },
    updateProduct() {
      this.$firestore.products.doc(this.product.id).update(this.product);
      Toast.fire({
        icon: "success",
        title: "保存成功",
      });

      ts("#modal").modal("hide");
    },
    editProduct(product) {
      // this.modal = "edit";
      this.product = product;
      ts("#modal").modal("show");
    },
    deleteProduct(doc) {
      Swal.fire({
        title: "確定要刪除嗎?",
        icon: "warning",
        text: "您將無法還原!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.value) {
          this.$firestore.products.doc(doc.id).delete();

          Toast.fire({
            icon: "success",
            type: "success",
            title: "刪除成功",
          });
        }
      });
    },
    readData() {},
    addProduct: function() {
      this.$firestore.products.add(this.product);
      Toast.fire({
        icon: "success",
        type: "success",
        title: "新增成功",
      });
    },
  },
  created() {},
};
</script>
//
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
  height: 100%;
  .modals {
    position: fixed;
    top: 0;
    height: 100vh;
    overflow: hidden;
    .content {
      display: flex;
      justify-content: space-around;
      .showimg {
        i {
          cursor: pointer;
        }
      }
      .inputs {
        display: flex;
        flex-direction: column;
        width: 178px;
        .upfile {
          display: flex;
          flex-direction: column;
        }
      }
      .ts.mini.header {
        margin: 0 !important;
        p {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 !important;
        }
      }
    }
  }
  .new {
    margin-bottom: 10px;
  }
}
.container {
  height: 100%;
  .cards {
    .cardp {
      flex-wrap: wrap;
      background: rgb(255, 255, 255);
      .image {
        position: relative;
        width: 20%;
      }
      .left.content {
        .description {
          font-size: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
