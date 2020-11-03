import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

const firebaseConfig = {
    apiKey: "AIzaSyAWkPcfi0E1ldkvs_wOZthBHKB8LMbOY14",
    authDomain: "labauth-508d6.firebaseapp.com",
    databaseURL: "https://labauth-508d6.firebaseio.com",
    projectId: "labauth-508d6",
    storageBucket: "labauth-508d6.appspot.com",
    messagingSenderId: "958569399949",
    appId: "1:958569399949:web:d50b74bbfbda7c866cc4c4"
  };

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});


