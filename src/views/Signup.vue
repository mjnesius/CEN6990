<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-md-4 mx-auto">
        <form @submit.prevent="signup">
          <h2 class="text-center">Signup</h2>
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
          <div class="form-group">
            <label for="exampleInputPassword1">Alias</label>
            <input
              type="password"
              v-model="alias"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Alias"
            >
          </div>
          <p v-if="feedback" class="text-danger text-center">{{ feedback }}</p>
          <div class="text-center">
            <button class="btn btn-primary">Signup</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import slugify from "slugify";
import firebase from "firebase";

export default {
  name: "Signup",
  data() {
    return {
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null
    };
  },
  methods: {
    signup() {
      if (this.alias && this.email && this.password) {
        this.feedback = null;
        this.slug = slugify(this.alias, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        let ref = db.collection("users").doc(this.slug);
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "This alias already exists";
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                ref.set({
                  alias: this.alias,
                  user_id: cred.user.uid
                });
              })
              .then(() => {
                this.$router.push({ name: "home" });
              })
              .catch(err => {
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
form {
  min-height: 600px;
}
</style>

