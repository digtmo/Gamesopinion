import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
// import bootstrap from '../../bootstrap'
// import fontawasome from '../../node_modules/@fortawesome'

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3VtyO2D4BVskOnZSmn2AMmTYyR3-BI6w",
  authDomain: "game-opinion.firebaseapp.com",
  projectId: "game-opinion",
  storageBucket: "game-opinion.appspot.com",
  messagingSenderId: "332709124593",
  appId: "1:332709124593:web:9234407dffe45da62b0c50"
};

// Initialize Firebase
initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
 // bootstrap,
 // fontawasome,
  router,
  store,
  render: h => h(App)
}).$mount('#app')


