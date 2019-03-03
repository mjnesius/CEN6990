import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Development from "./views/Development.vue";
import IT from "./views/IT.vue";
import Security from "./views/Security.vue";
import Course from "./views/Course.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/development",
      name: "development",
      component: Development
    },
    {
      path: "/it",
      name: "it",
      component: IT
    },
    {
      path: "/security",
      name: "security",
      component: Security
    },
    {
      path: "/course/:id",
      name: "course",
      component: Course
    },
    {
      path: "*",
      redirect: "/"
    }
  ],
  linkActiveClass: "active"
});
