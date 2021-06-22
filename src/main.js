import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000/api" : "/api";
const token = localStorage.getItem("jwt")
if(token) {
  axios.defaults.headers.common.authentication = token;
}
Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
