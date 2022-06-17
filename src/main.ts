import { createApp } from "vue";
import App from "./App.vue";

import 'element-plus/theme-chalk/base.css'
import * as ELIcons from '@element-plus/icons-vue'

import router from './router/index'

import store, { setupStore } from "./store";
// import './service/axios_demo'
const app=createApp(App);

// 图标需要全局注册
for (const [key, component] of Object.entries(ELIcons)) {
  app.component(key, component)
}

// 先注册 vuex
app.use(store);
// 再获取数据
setupStore();
// 路由要数据获取之后再注册, 因为路由中的数据是数据中加载的
// 最后注册路由
app.use(router);

app.mount("#app");



