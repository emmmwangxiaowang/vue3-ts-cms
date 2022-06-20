import { getPageListData } from '@/service/main/system/system'
import { Module } from 'vuex'
import { IRootState } from '../../types'
import { ISystemState } from './types'

const systemModule:Module<ISystemState,IRootState>={
  namespaced:true,
  state(){
    return {
      userList:[],
      userCount:0
    }
  },
  mutations:{
    changeUserList(state,userList:any[]){
      state.userList=userList
    },
    changeUserCount(state,userCount:number){
      state.userCount=userCount
    }
  }
  ,
  actions:{
    async getPageListAction({commit},payload:any){
      // 1. 对也米娜发送请求
      const pageResult = await getPageListData(payload.pageUrl,payload.queryInfo)

      console.log('-----');
      console.log(pageResult);

      const { userList,totalCount }=pageResult.data
      console.log(userList);
      console.log(totalCount);



      commit('changeUserList',userList)
      commit('changeUserCount',totalCount)
    }
  }
}

export default systemModule
