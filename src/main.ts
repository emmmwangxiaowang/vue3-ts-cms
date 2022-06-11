import { createApp } from "vue";
import App from "./App.vue";

import 'element-plus/theme-chalk/base.css'
import * as ELIcons from '@element-plus/icons-vue'

import router from './router/index'
import store from "./store/main";

import xwRequest from "./service/";
import { setupStore } from "./store";
// import './service/axios_demo'
const app=createApp(App);


for (const [key, component] of Object.entries(ELIcons)) {
  app.component(key, component)
}


app.use(router);
app.use(store);
app.mount("#app");
setupStore()


// xwRequest.request({
//   url:'axios-server',
//   intercepors:{
//     requestInterceptor:(config)=>{

//       const token=''
//       if(token){
//         config.headers!.Authorization=`Berer ${token}`
//       }

//       console.log('单独请求config');
//       return config
//     },
//     responseInterceptor:(res)=>{
//       console.log("单独响应的res");
//       return res
//     }
//   }
// })


// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// xwRequest.get<DataType>({
//   url:'axios-server',
//   showLoading:false
// })
// .then((res)=>{
//   console.log(res.data);
//   console.log(res.returnCode);

// })
