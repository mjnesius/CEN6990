import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Topic from "./views/Topic.vue";
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
      path: "/topic/:id",
      name: "topic",
      component: Topic
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
