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
            v-if="emailFeedback"
            class="text-center h5 my-3"
            :class="[isEmailSuccess ? 'text-success' : 'text-danger']"
          >{{ emailFeedback }}</p>
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
          <p
            v-if="passwordFeedback"
            class="text-center h5 mb-3"
            :class="[isPasswordSuccess ? 'text-success' : 'text-danger']"
          >{{ passwordFeedback }}</p>
          <button class="btn btn-lg btn-primary btn-block mb-5">Update Password</button>
        </form>
        <h3>
          Alias:
          <span class="text-muted ml-2">{{ user.displayName }}</span>
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
      email: null,
      password: null,
      passwordFeedback: null,
      emailFeedback: null,
      isEmailSuccess: true,
      isPasswordSuccess: true
    };
  },
  methods: {
    updatePassword() {
      if (this.password) {
        this.passwordFeedback = null;
        this.user
          .updatePassword(this.password)
          .then(() => {
            this.isPasswordSuccess = true;
            this.passwordFeedback = "Password update successful.";
          })
          .catch(error => {
            this.isPasswordSuccess = false;
            this.passwordFeedback = error;
          });
      } else {
        this.isPasswordSuccess = false;
        this.passwordFeedback = "Please fill in password field";
      }
    },
    updateEmail() {
      if (this.email) {
        this.emailFeedback = null;
        this.user
          .updateEmail(this.email)
          .then(() => {
            this.isEmailSuccess = true;
            this.emailFeedback = "Email update successful";
          })
          .catch(error => {
            this.isEmailSuccess = false;
            this.emailFeedback = error;
          });
      } else {
        this.isEmailSuccess = false;
        this.emailFeedback = "Please fill in email field";
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style scoped>
</style>
