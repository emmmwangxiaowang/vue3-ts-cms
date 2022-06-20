import { Module } from "vuex";

import { accoutnLoginRequest, requestUserInfoById, requestUserMenusByRoleId } from "@/service/login/login";

import localCache from "@/utils/cache";

import { IAccount } from "@/service/login/types";
import { ILoginState } from "./types";
import { IRootState } from "../types";
import router from "@/router";

import { mapMenusToRoutes } from "@/utils/map-menus";

// 第一个泛型: 子模块类型  第二个泛型: 根模块泛型
const loginModule:Module<ILoginState,IRootState>={
  namespaced:true,
  state(){
    return {
      token:'',
      userInfo:{},
      userMenus:[]
    }
  },
  getters:{},
  mutations:{
    changeToken(state,token:string){
      state.token=token
    },
    changeUserInfo(state,userInfo:any){
      state.userInfo=userInfo
    },
    changeUserMenus(state,userMenus:any){
      state.userMenus=userMenus

      // userMenus => routes
      const routes= mapMenusToRoutes(userMenus)
      // 将 routes => router.mian.children



      // 将 routes => router.main.children
      routes.forEach((item)=>{
        router.addRoute('main',item)
      })




    }
  },
  actions:{
    async accountLoginAction({commit},payload:IAccount){
      // 实现登录逻辑
      const  loginResult=await accoutnLoginRequest(payload)

      const {id,token}=loginResult.data
      commit('changeToken',token)
      localCache.setCache('token',token);

      // 请求用户信息
      const userInfoResult= await requestUserInfoById(id)

      const userInfo=userInfoResult.data

      commit('changeUserInfo',userInfo);
      localCache.setCache('userInfo',userInfo);


      // 请求用户菜单
      const userMenusResult=await requestUserMenusByRoleId(userInfo.id)
      const userMenus=userMenusResult.data;




      commit('changeUserMenus',userMenus)
      localCache.setCache('userMenus',userMenus)

      // 跳到首页
      router.push('/main')

    },

    // 保持 vuex 中的数据 与 本地数据一致, 不然用户登录刷新后 会导致 vuex 中没有提交 action , 没有更新数据
    loadLocalLogin({commit}){
      const token=localCache.getCache('token')
      if(token){
        commit('changeToken',token)
      }
      const userInfo=localCache.getCache('userInfo')

      if(userInfo){
        commit('changeUserInfo',userInfo)
      }
      const userMenus=localCache.getCache('userMenus')

      if(userMenus){
        commit('changeUserMenus',userMenus)
      }
    }
  }
}

export default loginModule
