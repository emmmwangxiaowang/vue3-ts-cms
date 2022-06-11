import { UserMenu } from "@/store/login/types";

import { RouteRecordRaw } from "vue-router";

// 将 userMenus 中对应的 url 映射到 路由中
export function mapMenusToRoutes(userMenus:UserMenu[]):RouteRecordRaw[]{
  const routes:RouteRecordRaw[]=[]

  // 1. 先去加载默认所有的 routes
  const allRoutes:RouteRecordRaw[]=[]
  // 递归查找指定目录下后缀为 .ts 的文件
  const routeFiles = require.context("../router/main",true,/\.ts$/)
  routeFiles.keys().forEach((key)=>{

    // 读取文件内容
    const route=require('../router/main'+key.split('.')[1])
    allRoutes.push(route.default)

  })



  // 2. 根据菜单获取需要添加的routes

  // const routeFilters= userMenus.filter((item)=>{
  //   return item.parentMenuId ===2 || item.parentMenuId===3
  // })

  const routeFilters = userMenus.filter((item)=>{
    return item.type === 1
  })

  console.log("allroutes");
  console.log(allRoutes);



  for(const menu of routeFilters){
    const route = allRoutes.find((item)=>{
      return item.path === menu.url
    })





    if(route){
      routes.push(route)
    }
  }




    // for(const menu of userMenus){
    //   if(menu.parentMenuId in [2,3]){

    //     const route=allRoutes.find((route)=>{
    //       route.path===menu.url
    //     })
    //     console.log('====');

    //     console.log(route);

    //     if(route){
    //       routes.push(route)
    //     }

    //     // routes.push({path:menu.url,name:menu.menuName,children:[],component:() => import(`@/views/main/system/${menu.menuName}/${menu.menuName}.vue`)})
    //   }
    // }





  return routes
}
