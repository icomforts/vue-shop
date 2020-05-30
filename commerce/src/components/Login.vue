<template>
  <div class="login">
    <div class="ts modals dimmer ">
      <dialog id="loginmodals" class="ts closable tiny modal">
        <div class="sw" @click="sw()">
          <div class="sww">登入</div>
        </div>
        <div class="ts centered secondary segment">
          <!-- 表單 -->
          <form class="ts  form forms">
            <!-- 帳號欄位 -->
            <div class="ts underlined input">
              <label>信箱</label>
              <input type="text" placeholder="admin@me.com" v-model="email" />
            </div>

            <!-- / 帳號欄位 -->

            <!-- 密碼欄位 -->
            <div class="ts underlined input">
              <label>密碼</label>
              <input
                type="password"
                placeholder="admin123"
                v-model="password"
              />
            </div>
            <!-- / 密碼欄位 -->

            <!-- 登入按鈕 -->
            <button type="button" class=" loginbtn " @click="login">
              <svg
                class="svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                enable-background="new 0 0 283.46 283.46"
                height="512px"
                version="1.1"
                viewBox="0 0 283.46 283.46"
                width="512px"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M22.855,81.087    C9.543,107.082,4.61,137.596,10.832,168.451"
                      fill="none"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="8"
                    />
                    <path
                      d="M200.875,21.835    c-25.543-12.538-55.271-17.06-85.321-11.001c-34.136,6.882-62.593,26.187-81.618,52.257"
                      fill="none"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="8"
                    />
                    <path
                      d="M273.164,115.555    c-7.06-35.013-27.189-64.056-54.285-83.07"
                      fill="none"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="8"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M275.877,144.695    c0.184-9.594-0.666-19.357-2.641-29.154"
                      fill="none"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="8"
                    />
                    <path
                      d="M10.904,168.438    c0.388,1.921,0.814,3.824,1.279,5.709"
                      fill="none"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="8"
                    />
                  </g>
                </g>
                <path
                  d="M107.454,271.29  c29.977-34.119,44.249-81.34,34.579-129.294"
                  fill="none"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M119.176,220.338  c-6.555,16.798-16.443,32.131-29.02,45.026"
                  fill="none"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M126.187,274.896  c29.051-37.175,42.302-86.333,32.245-136.205l0.052-0.017c-1.836-9.104-10.703-14.996-19.807-13.16  c-9.103,1.836-14.994,10.703-13.159,19.808l0.119-0.02c3.746,18.581,3.45,37.04-0.284,54.465"
                  fill="none"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M110.51,156.144  c5.245,38.701-9.215,76.082-36.162,101.293"
                  fill="none"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M178.494,171.434  c-0.033-11.89-1.227-23.95-3.666-36.049l0.037-0.014c-3.659-18.152-21.34-29.901-39.492-26.24  c-13.559,2.734-23.546,13.292-26.203,26.027"
                  fill="none"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M146.273,275.748  c16.744-24.469,27.606-52.939,31.045-83.098"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M145.93,91.898  c-4.529-0.353-9.184-0.093-13.859,0.85c-27.201,5.485-44.805,31.979-39.32,59.182l0.094-0.016  c7.418,36.792-6.293,72.938-32.779,95.876"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M167.608,273.324  c24.108-41.098,33.776-90.867,23.617-141.246l0.024-0.01c-3.023-14.988-12.424-27.063-24.807-33.967"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M72.457,201.992  c-5.228,13.461-13.877,25.422-25.095,34.611"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M209.084,207.06  c4.162-25.266,3.9-51.697-1.461-78.287l0.01-0.007c-7.31-36.25-42.617-59.709-78.865-52.4c-36.25,7.31-59.71,42.618-52.4,78.869  l0.078-0.016c1.736,8.61,2.084,17.178,1.197,25.47"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M190.006,266.909  c6.068-12.456,10.967-25.52,14.582-39.021"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M209.666,92.758  c6.883,9.447,11.887,20.496,14.35,32.705l0.005,0.004c9.095,45.104,4.563,89.789-10.744,129.806"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M107.07,65.952  c5.76-2.64,11.913-4.663,18.393-5.969c25.609-5.163,50.842,1.962,69.588,17.315"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M36.275,224.05  c18.902-15.185,28.896-40.118,23.771-65.524l-0.063,0.014c-6.366-31.567,5.94-62.562,29.315-81.544"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M41.684,145.976  c0.215,5.25,0.844,10.552,1.916,15.867l0.051-0.013c3.752,18.607-3.295,36.881-16.821,48.343"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M242.69,135.156  c-0.642-4.326-1.399-8.658-2.272-12.994l-0.02-0.001C229.44,67.813,176.506,32.643,122.16,43.6  c-41.765,8.422-72.207,41.635-79.088,81.229"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M236.983,236.258  c6.826-25.603,9.664-52.564,7.931-80.029"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M157.688,25.931  c-12.592-1.701-25.675-1.366-38.83,1.287C55.461,40,14.432,101.75,27.215,165.146l0.039-0.01c2.219,11-1.225,21.823-8.313,29.47"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M260.104,204.896  c3.479-27.945,2.584-56.916-3.289-86.041l-0.033,0.002c-8.693-43.112-40.031-75.878-79.129-88.413"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
              </svg>
            </button>
            <!-- / 登入按鈕 -->
          </form>
          <form class="ts form forms2">
            <div class="ts underlined input">
              <label>名稱</label>
              <input type="text" placeholder="name" v-model="name" />
            </div>
            <!-- 帳號欄位 -->
            <div class="ts underlined input">
              <label>信箱</label>
              <input type="text" placeholder="email" v-model="email" />
            </div>
            <!-- / 帳號欄位 -->

            <div class="ts underlined input">
              <label>密碼</label>
              <input
                type="password"
                placeholder="password"
                v-model="password"
              />
            </div>

            <button type="button" class=" loginbtn " @click="register">
              <svg
                class="svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                enable-background="new 0 0 283.46 283.46"
                height="512px"
                version="1.1"
                viewBox="0 0 283.46 283.46"
                width="512px"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M22.855,81.087    C9.543,107.082,4.61,137.596,10.832,168.451"
                      fill="none"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="8"
                    />
                    <path
                      d="M200.875,21.835    c-25.543-12.538-55.271-17.06-85.321-11.001c-34.136,6.882-62.593,26.187-81.618,52.257"
                      fill="none"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="8"
                    />
                    <path
                      d="M273.164,115.555    c-7.06-35.013-27.189-64.056-54.285-83.07"
                      fill="none"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="8"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M275.877,144.695    c0.184-9.594-0.666-19.357-2.641-29.154"
                      fill="none"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="8"
                    />
                    <path
                      d="M10.904,168.438    c0.388,1.921,0.814,3.824,1.279,5.709"
                      fill="none"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="8"
                    />
                  </g>
                </g>
                <path
                  d="M107.454,271.29  c29.977-34.119,44.249-81.34,34.579-129.294"
                  fill="none"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M119.176,220.338  c-6.555,16.798-16.443,32.131-29.02,45.026"
                  fill="none"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M126.187,274.896  c29.051-37.175,42.302-86.333,32.245-136.205l0.052-0.017c-1.836-9.104-10.703-14.996-19.807-13.16  c-9.103,1.836-14.994,10.703-13.159,19.808l0.119-0.02c3.746,18.581,3.45,37.04-0.284,54.465"
                  fill="none"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M110.51,156.144  c5.245,38.701-9.215,76.082-36.162,101.293"
                  fill="none"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M178.494,171.434  c-0.033-11.89-1.227-23.95-3.666-36.049l0.037-0.014c-3.659-18.152-21.34-29.901-39.492-26.24  c-13.559,2.734-23.546,13.292-26.203,26.027"
                  fill="none"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M146.273,275.748  c16.744-24.469,27.606-52.939,31.045-83.098"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M145.93,91.898  c-4.529-0.353-9.184-0.093-13.859,0.85c-27.201,5.485-44.805,31.979-39.32,59.182l0.094-0.016  c7.418,36.792-6.293,72.938-32.779,95.876"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M167.608,273.324  c24.108-41.098,33.776-90.867,23.617-141.246l0.024-0.01c-3.023-14.988-12.424-27.063-24.807-33.967"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M72.457,201.992  c-5.228,13.461-13.877,25.422-25.095,34.611"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M209.084,207.06  c4.162-25.266,3.9-51.697-1.461-78.287l0.01-0.007c-7.31-36.25-42.617-59.709-78.865-52.4c-36.25,7.31-59.71,42.618-52.4,78.869  l0.078-0.016c1.736,8.61,2.084,17.178,1.197,25.47"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M190.006,266.909  c6.068-12.456,10.967-25.52,14.582-39.021"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M209.666,92.758  c6.883,9.447,11.887,20.496,14.35,32.705l0.005,0.004c9.095,45.104,4.563,89.789-10.744,129.806"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M107.07,65.952  c5.76-2.64,11.913-4.663,18.393-5.969c25.609-5.163,50.842,1.962,69.588,17.315"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M36.275,224.05  c18.902-15.185,28.896-40.118,23.771-65.524l-0.063,0.014c-6.366-31.567,5.94-62.562,29.315-81.544"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M41.684,145.976  c0.215,5.25,0.844,10.552,1.916,15.867l0.051-0.013c3.752,18.607-3.295,36.881-16.821,48.343"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M242.69,135.156  c-0.642-4.326-1.399-8.658-2.272-12.994l-0.02-0.001C229.44,67.813,176.506,32.643,122.16,43.6  c-41.765,8.422-72.207,41.635-79.088,81.229"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M236.983,236.258  c6.826-25.603,9.664-52.564,7.931-80.029"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M157.688,25.931  c-12.592-1.701-25.675-1.366-38.83,1.287C55.461,40,14.432,101.75,27.215,165.146l0.039-0.01c2.219,11-1.225,21.823-8.313,29.47"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
                <path
                  d="M260.104,204.896  c3.479-27.945,2.584-56.916-3.289-86.041l-0.033,0.002c-8.693-43.112-40.031-75.878-79.129-88.413"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="8"
                />
              </svg>
            </button>
          </form></div
      ></dialog>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";

export default {
  name: "Login",
  props: {
    msg: String,
  },
  data() {
    return {
      name: null,
      email: null,
      password: null,
    };
  },

  methods: {
    sw() {
      $(".sw").toggleClass("active");
      if ($(".sw").hasClass("active")) {
        $(".sww").text("註冊");
      } else {
        $(".sww").text("登入");
      }
      $(".forms").toggleClass("hide");
      $(".forms2").toggleClass("show");
    },
    login() {
      $(".svg path").css("stroke", "rgb(15, 250, 27)");
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("admin/dashboard");
        })
        .catch(function(error) {
          $(".svg path").css("stroke", "red");
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("密碼錯誤");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
    register() {
      $(".svg path").css("stroke", "rgb(15, 250, 27)");

      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          db.collection("profiles")
            .doc(user.user.uid)
            .set({
              name: this.name,
            })
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });

          this.$router.replace("admin");
        })
        .catch(function(error) {
          $(".svg path").css("stroke", "red");
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("密碼不符合");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modals {
  .modal {
    height: 50vh;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex !important;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.774);
    .sw {
      height: 40px;
      width: 80px;

      background: rgb(0, 113, 227);
      position: absolute;
      border-radius: 50px;
      top: 7%;
      transition: all 0.5s linear;

      .sww {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: white;
        height: 32px;
        width: 32px;
        margin: 0 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        transition: all 0.5s linear;
        cursor: pointer;
        font-weight: 900;
        color: black;
      }
    }
    .sw.active {
      background: white;
    }
    .sw.active .sww {
      background: rgb(0, 113, 227);
      right: 0;
    }
    .segment {
      background: rgba(0, 0, 0, 0.459);

      .form,
      .forms2 {
        flex-direction: column;

        div {
          margin-top: 10px;
        }
        .input {
          display: flex;
          align-items: center;
        }
        input {
          margin-left: 10px;
          background: none;
        }
        .loginbtn {
          margin-top: 10px;
          width: 50px;
          height: 50px;
          border-radius: 5px;
          align-self: center;
          display: flex;

          .svg {
            height: 50px;
            width: 50px;
            path {
              stroke: white;
              transition: all 0.2s linear;
            }
          }
        }

        background: transparent;
        label {
          color: white;
          margin-bottom: -0.5rem !important;
        }
      }
      .forms {
        display: flex;
      }
      .forms2 {
        display: none;
      }
    }
  }
  .modal::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(/img/shop.jpg);
    background-size: cover;
    opacity: 0.4;
  }
}
.show {
  display: flex !important;
}
.hide {
  display: none !important;
}
</style>
