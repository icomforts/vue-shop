<template>
  <div class="contact">
    <div class="ts modals dimmer">
      <dialog id="contactmodals" class="ts basic closable modal" open>
        <div class="ts icon header">
          <i class="smile icon"></i> 對我們有什麼不滿呢
        </div>
        <div class="content">
          <div class="ts underlined input email">
            <input type="text" placeholder="報上大名(信箱)" v-model="email" />
          </div>
          <div class="ts underlined resizable input content">
            <textarea placeholder="說來聽聽..." v-model="content"></textarea>
          </div>
        </div>
        <div class="actions">
          <button class="ts inverted basic positive button" @click="send()">
            去吧
          </button>
        </div>
      </dialog>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";

export default {
  name: "Contact",
  props: {
    msg: String,
  },
  data() {
    return {
      email: null,
      content: "",
    };
  },

  methods: {
    send() {
      Email.send({
        SecureToken: "844f87e8-b335-4af7-9b98-35622e3a1cfc",
        To: "a1997228@gmail.com",
        From: this.email,
        Subject: "This shop 來信",
        Body: this.content,
      }).then(
        Toast.fire({
          icon: "success",
          title: "我們收到囉!",
        })
      );
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
  background: rgba(0, 0, 0, 0.774);
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .email {
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        background: rgba(0, 0, 0, 0.644);
      }
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30vw;
      height: 20vh;
      textarea {
        background: rgba(0, 0, 0, 0.644);
        margin-top: 30px;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
