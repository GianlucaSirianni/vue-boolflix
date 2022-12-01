import Vue from 'vue'
import App from './App.vue'


import { library } from "@fortawesome/fontawesome-svg-core";


import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


import {
  faUserSecret,
  faMagnifyingGlass,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";

import { faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons";


library.add(faUserSecret, faMagnifyingGlass, faStarRegular, faStarSolid);


Vue.component("font-awesome-icon", FontAwesomeIcon);

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
