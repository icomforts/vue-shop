<template>
  <div class="products">
    <div class="img">
      <img src="/img/svg/profile.svg" alt="" />
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { fb, db } from "../firebase";

export default {
  name: "profile",
  components: {
    VueEditor,
  },
  props: {
    msg: String,
  },

  data() {
    return {
      profile: {
        name: null,
        phone: null,
        address: null,
        postcode: null,
      },

      account: {
        name: null,
        email: null,
        photoUrl: null,
        emailVerified: null,
        password: null,
        confirmPassword: null,
        uid: null,
      },
    };
  },

  firestore() {
    const user = fb.auth().currentUser;
    return {
      profile: db.collection("profiles").doc(user.uid),
    };
  },
  methods: {
    resetPassword() {
      const auth = fb.auth();

      auth
        .sendPasswordResetEmail(auth.currentUser.email)
        .then(() => {
          Toast.fire({
            icon: "success",
            type: "success",
            title: "Email sent",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updateProfile() {
      this.$firestore.profile.update(this.profile);
      Toast.fire({
        icon: "success",
        type: "success",
        title: "更新成功",
      });
    },
    uploadImage() {},
  },
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
