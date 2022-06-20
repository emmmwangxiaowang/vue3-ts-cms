import { IBreadcrumb } from "@/base-ui/breadcrumb";
import menu from "@/router/main/system/menu/menu";
import { UserMenu } from "@/store/login/types";

import { RouteRecordRaw } from "vue-router";

let firstMenu:UserMenu
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

  for(const menu of routeFilters){
    const route = allRoutes.find((item)=>{
      return item.path === menu.url
    })

    if(route){
      routes.push(route)
    }

    // 如果 首页路由为空, 就将第一个遍历出来的路由赋值给 firstMenu
    if(!firstMenu){
      firstMenu=menu
    }
  }


  return routes
}

export function pathMapBreadcrumbs(userMenus:UserMenu[],currentPath:string){
  const breadcrumbs:IBreadcrumb[]=[]

  const menus= userMenus.find((item)=>
    item.url===currentPath
  )

  if(menus){
    // 当前路由存在,直接放入面包屑
    breadcrumbs.push({name:menus!.menuName})

    // 找到当前路由的父路由
    const parent= userMenus.find((item)=>
      item.id===menus?.parentMenuId
    )

    breadcrumbs.push({name:parent!.menuName,})
  }

  return breadcrumbs

}

export function pathMapToMenu(userMenus:UserMenu[],currentPath:string){

  return userMenus.find((item)=>
    item.url===currentPath
  )
}

export { firstMenu }
