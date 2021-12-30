import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase';
import 'semantic-ui-css/semantic.min.css';

Vue.config.productionTip = false

// Firebase configuration
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

firebase.initializeApp(firebaseConfig);

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
