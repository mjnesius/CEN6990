import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Profile from "./views/Profile.vue";
import History from "./views/History.vue";
import Add from "./views/Add.vue";
import Edit from "./views/Edit.vue";
import Manage from "./views/Manage.vue";
import Statistics from "./views/Statistics.vue";
import Features from "./views/Features.vue";
import Faq from "./views/Faq.vue";
import Topic from "./views/Topic.vue";
import Course from "./views/Course.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import firebase from "firebase";
import db from "@/firebase/init";
import store from "./store";

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
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/features",
      name: "features",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Features.vue")
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import(/* webpackChunkName: "about" */ "./views/Faq.vue")
    },
    {
      path: "/topic/:id",
      name: "topic",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Topic.vue")
    },
    {
      path: "/course/:id",
      name: "course",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Course.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/signup",
      name: "signup",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Signup.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login.vue")
    },
    {
      path: "/manage",
      name: "manage",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Manage.vue"),
      meta: {
        requiresAuth: true,
        requiresInstructor: true
      }
    },
    {
      path: "/statistics",
      name: "statistics",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Statistics.vue"),
      meta: {
        requiresAuth: true,
        requiresInstructor: true
      }
    },
    {
      path: "/profile",
      name: "profile",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Profile.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/history",
      name: "history",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/History.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/add",
      name: "add",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Add.vue"),
      meta: {
        requiresAuth: true,
        requiresInstructor: true
      }
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Edit.vue"),
      meta: {
        requiresAuth: true,
        requiresInstructor: true
      }
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
    let user = store.state.user;
    let admin = store.state.admin;
    if (user) {
      if (to.matched.some(rec => rec.meta.requiresInstructor)) {
        if (admin) {
          next();
        } else {
          next({
            name: "home"
          });
        }
      }
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
