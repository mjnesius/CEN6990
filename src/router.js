import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Topic from "./views/Topic.vue";
import Course from "./views/Course.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import firebase from "firebase";

Vue.use(Router);

const router = new Router({
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
      component: Topic,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/course/:id",
      name: "course",
      component: Course,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "*",
      redirect: "/"
    }
  ],
  linkActiveClass: "active"
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    let user = firebase.auth().currentUser;
    if (user) {
      next();
    } else {
      next({
        name: "login"
      });
    }
  } else {
    next();
  }
});

export default router;
