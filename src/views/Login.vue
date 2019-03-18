<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-md-4 mx-auto">
        <form @submit.prevent="login">
          <h2 class="text-center">Login</h2>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            >
            <small
              id="emailHelp"
              class="form-text text-muted"
            >We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            >
          </div>
          <p v-if="feedback" class="text-danger text-center">{{ feedback }}</p>
          <div class="text-center">
            <button class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
        this.feedback = null;
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            this.$router.push({ name: "home" });
          })
          .catch(err => {
            this.feedback = err.message;
          });
      } else {
        this.feedback = "Please fill in both fields";
      }
    }
  }
};
</script>

<style scoped>
</style>
