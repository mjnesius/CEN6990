<template>
  <div class="container vh-100">
    <div class="row my-5">
      <div class="col-md-4 mx-auto my-5">
        <form @submit.prevent="signup">
          <h2 class="text-center mb-4">Signup</h2>
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
          <div class="form-group mb-4">
            <label for="alias" class="sr-only">Alias</label>
            <input
              type="text"
              v-model="alias"
              class="form-control form-control-lg"
              id="alias"
              placeholder="Alias"
            >
          </div>
          <p v-if="feedback" class="text-danger text-center h5 my-3">{{ feedback }}</p>
          <button class="btn btn-lg btn-primary btn-block mb-5">Signup</button>
        </form>
        <div v-if="fetchData" class="d-flex justify-content-center">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import slugify from "slugify";
import firebase from "firebase";
import functions from "firebase/functions";

export default {
  name: "Signup",
  data() {
    return {
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null,
      fetchData: false
    };
  },
  methods: {
    signup() {
      if (this.alias && this.email && this.password) {
        this.fetchData = true;
        this.feedback = null;
        this.slug = slugify(this.alias, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        let checkAlias = firebase.functions().httpsCallable("checkAlias");
        checkAlias({ slug: this.slug }).then(result => {
          if (!result.data.unique) {
            this.fetchData = false;
            this.feedback = "This alias already exists";
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                db.collection("users")
                  .doc(this.slug)
                  .set({
                    alias: this.alias,
                    user_id: cred.user.uid
                  });
                cred.user
                  .updateProfile({
                    displayName: this.alias
                  })
                  .catch(error => {
                    console.log(error);
                  });
              })
              .then(() => {
                this.fetchData = false;
                this.$store.commit("updateUser");
                this.$router.push({ name: "home" });
              })
              .catch(err => {
                this.fetchData = false;
                this.feedback = err.message;
              });
          }
        });
      } else {
        this.feedback = "Please fill in all fields";
      }
    }
  }
};
</script>

<style scoped>
</style>
