import { createApp } from "vue";
import App from "./App.vue";

import 'element-plus/theme-chalk/base.css'

import router from './router/index'
import store from "./store";

const app=createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
