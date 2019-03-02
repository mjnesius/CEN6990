<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <router-link class="navbar-brand" :to="{ name: 'home'}">UWF Empowers</router-link>
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
          <router-link class="nav-link" :to="{ name: 'home'}" exact>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'about'}" exact>About</router-link>
        </li>   
        <li class="nav-item ml-5">
          <router-link class="nav-link" :to="{ name: 'topic', params: {id: 1}}" exact>Development</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'topic', params: {id: 2}}" exact>IT</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'topic', params: {id: 3}}" exact>Security</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
</style>