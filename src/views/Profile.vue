<template>
  <div class="container vh-100">
    <div class="row my-5">
      <div class="col-md-4 mx-auto my-5">
        <h2 class="text-center mb-5">Update Profile</h2>
        <form @submit.prevent="updateEmail">
          <div class="form-group mb-3">
            <label for="exampleInputEmail1" class="sr-only">Email address</label>
            <input
              type="email"
              v-model="email"
              class="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter new email"
            >
          </div>
          <p v-if="emailFeedback" class="text-danger text-center h5 mt-3">{{ emailFeedback }}</p>
          <button class="btn btn-lg btn-primary btn-block mb-5">Update Email</button>
        </form>
        <form @submit.prevent="updatePassword">
          <div class="form-group mb-4">
            <label for="exampleInputPassword1" class="sr-only">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control form-control-lg"
              id="exampleInputPassword1"
              placeholder="Password"
            >
          </div>
          <p v-if="passwordFeedback" class="text-danger text-center h5 mb-3">{{ passwordFeedback }}</p>
          <button class="btn btn-lg btn-primary btn-block mb-5">Update Password</button>
        </form>
            <h3>Alias:  <span class="text-muted">{{ alias }}</span></h3>
            <hr>
            <p class="form-text text-muted"
            >Alias cannot be changed after initial registration.</p>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";

export default {
  name: "Profile",
  data() {
    return {
      user: null,
      email: null,
      password: null,
      alias: null,
      passwordFeedback: null,
      emailFeedback: null
    };
  },
  methods: {
    updatePassword() {
      if (this.password) {
        this.passwordFeedback = null;
        this.user
          .updatePassword(this.password)
          .then(() => {
            this.passwordFeedback = "Password update successful.";
          })
          .catch(error => {
            this.passwordFeedback = error;
          });
      } else {
        this.passwordFeedback = "Please fill in password field";
      }
    },
    updateEmail() {
      if (this.email) {
        this.emailFeedback = null;
        this.user
          .updateEmail(this.email)
          .then(() => {
            this.emailFeedback = "Email update successful";
          })
          .catch(error => {
            this.emailFeedback = error;
          });
      } else {
        this.emailFeedback = "Please fill in email field";
      }
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        this.alias = user.displayName;
      } else {
        this.user = null;
      }
    });
  }
};
</script>

<style scoped>
</style>
