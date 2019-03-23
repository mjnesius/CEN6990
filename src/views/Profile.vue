<template>
  <div class="container vh-100">
    <div class="row my-5">
      <div class="col-md-4 mx-auto my-5">
        <h2 class="text-center mb-5">Update Profile</h2>
        <form @submit.prevent="updateEmail">
          <div class="form-group mb-3">
            <label for="exampleInputEmail1">Current Email: {{ user.email }}</label>
            <input
              type="email"
              v-model="email"
              class="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter new email"
            >
          </div>
          <p
            v-if="emailFeedbackSuccess"
            class="text-center h5 my-3 text-success"
          >{{ emailFeedbackSuccess }}</p>
          <p
            v-if="emailFeedbackError"
            class="text-center h5 my-3 text-danger"
          >{{ emailFeedbackError }}</p>
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
          <p v-if="passwordFeedbackSuccess" class="text-center h5 mb-3 text-success" v:class="messageClass">{{ passwordFeedbackSuccess }}</p>
          <p v-if="passwordFeedbackError" class="text-center h5 mb-3 text-danger" v:class="messageClass">{{ passwordFeedbackError }}</p>
          <button class="btn btn-lg btn-primary btn-block mb-5">Update Password</button>
        </form>
        <h3>
          Alias:
          <span class="text-muted ml-2">{{ alias }}</span>
        </h3>
        <hr>
        <p class="form-text text-muted">Alias cannot be changed after initial registration.</p>
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
      passwordFeedbackSuccess: null,
      passwordFeedbackError: null,
      emailFeedbackSuccess: null,
      emailFeedbackError: null
    };
  },
  methods: {
    updatePassword() {
      if (this.password) {
        this.passwordFeedbackSuccess = null;
        this.passwordFeedbackError = null;
        this.user
          .updatePassword(this.password)
          .then(() => {
            this.passwordFeedbackSuccess = "Password update successful.";
          })
          .catch(error => {
            this.passwordFeedbackError = error;
          });
      } else {
        this.passwordFeedbackSuccess = null;
        this.passwordFeedbackError = "Please fill in password field";
      }
    },
    updateEmail() {
      if (this.email) {
        this.emailFeedbackSuccess = null;
        this.emailFeedbackError = null;
        this.user
          .updateEmail(this.email)
          .then(() => {
            this.emailFeedbackSuccess = "Email update successful";
          })
          .catch(error => {
            this.emailFeedbackError = error;
          });
      } else {
        this.emailFeedbackSuccess = null;
        this.emailFeedbackError = "Please fill in email field";
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
