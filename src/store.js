import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import db from "@/firebase/init";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    admin: null
  },
  mutations: {
    updateUser(state) {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          state.user = user;
          db.collection("admin")
            .doc(user.uid)
            .get()
            .then(doc => {
              if (doc.exists) {
                state.admin = true;
              } else {
                state.admin = false;
              }
            });
        } else {
          state.user = null;
        }
      });
    }
  },
  actions: {}
});
