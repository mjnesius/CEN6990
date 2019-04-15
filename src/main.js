import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "bootstrap";
import "bootswatch/dist/materia/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlayCircle,
  faGift,
  faBookReader,
  faLaptop,
  faSchool,
  faCode,
  faChevronUp,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import {
  faPlayCircle as faPlayCircleSolid,
  faCalendarAlt
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);

library.add(
  faPlayCircle,
  faPlayCircleSolid,
  faCalendarAlt,
  faGift,
  faBookReader,
  faLaptop,
  faSchool,
  faCode,
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
