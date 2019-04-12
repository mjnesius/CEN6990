import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import "bootstrap";
import "bootswatch/dist/materia/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlayCircle,
  faGift,
  faBookReader,
  faChevronUp,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import {
  faPlayCircle as faPlayCircleSolid,
  faCalendarAlt
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueCarousel from "vue-carousel";
// eslint-disable-next-line no-unused-vars
import { uptime } from "os";
Vue.use(VueCarousel);

library.add(
  faPlayCircle,
  faPlayCircleSolid,
  faCalendarAlt,
  faGift,
  faBookReader,
  faChevronUp,
  faChevronDown
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
let app = null;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
