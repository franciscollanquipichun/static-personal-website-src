import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import "../node_modules/bulma/css/bulma.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
