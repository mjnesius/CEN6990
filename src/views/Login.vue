<template>
  <div class="container vh-100">
    <div class="row my-5">
      <div class="col-md-4 mx-auto my-5">
        <form @submit.prevent="login">
          <h2 class="text-center mb-4">Login</h2>
          <div class="form-group mb-4">
            <label for="exampleInputEmail1" class="sr-only">Email address</label>
            <input
              type="email"
              v-model="email"
              class="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              autofocus
            >
          </div>
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
          <p v-if="feedbackLogin" class="text-danger text-center h5 my-3">{{ feedbackLogin }}</p>
          <button class="btn btn-lg btn-primary btn-block mb-3">Login</button>
        </form>
        <h5 class="text-center">
          <a href @click.prevent="resetPassword">Forgot password?</a>
        </h5>
        <p
          v-if="feedbackForgotPassword"
          class="text-danger text-center h5 my-3"
        >{{ feedbackForgotPassword }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      feedbackLogin: null,
      feedbackForgotPassword: null
    };
  },
  methods: {
    resetPassword() {
      if (this.email) {
        this.feedbackLogin = null;
        this.feedbackForgotPassword = null;
        let auth = firebase.auth();
        auth
          .sendPasswordResetEmail(this.email)
          .then(() => {
            this.feedbackForgotPassword = `A Password Reset Email was sent to ${
              this.email
            }`;
          })
          .catch(error => {
            console.log(error);
            this.feedbackForgotPassword = error;
          });
      } else {
        this.feedbackLogin = null;
        this.feedbackForgotPassword =
          "Please fill in email field and then re-select Forgot Password.";
      }
    },
    login() {
      if (this.email && this.password) {
        this.feedbackLogin = null;
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            this.$router.go(-1);
          })
          .catch(err => {
            this.feedbackLogin = err.message;
          });
      } else {
        this.feedbackLogin = "Please fill in both fields";
      }
    }
  }
};
</script>

<style scoped>
</style>
