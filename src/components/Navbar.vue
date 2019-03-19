<template>
  <nav class="navbar navbar-fixed navbar-expand-md navbar-dark bg-primary">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">UWF Empowers</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'about' }" exact>About</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'topic', params: { id: 0 } }"
              exact
            >Development</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'topic', params: { id: 1 } }" exact>IT</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'topic', params: { id: 2 } }"
              exact
            >CyberSecurity</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li v-if="!user" class="nav-item">
            <router-link class="nav-link" :to="{ name: 'signup' }" exact>Signup</router-link>
          </li>
          <li v-if="!user" class="nav-item">
            <router-link class="nav-link" :to="{ name: 'login', params: { id: 0 } }" exact>Login</router-link>
          </li>
          <li v-if="user" class="nav-item">
            <a class="nav-link">{{ user.email }}</a>
          </li>
          <li v-if="user" class="nav-item">
            <a class="nav-link logout" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Navbar",
  data() {
    return {
      user: null
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "login" });
        });
    }
  }
};
</script>

<style scoped>

li.nav-item {
  font-size: 1.2rem;
}
.navbar-brand {
  font-size: 1.7rem;
}
.logout {
  cursor: pointer;
}

</style>
