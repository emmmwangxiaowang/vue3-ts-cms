
import { createStore,Store,useStore as useVuexStore } from "vuex";
import { IStoreType } from "./types";

import login from './login/login'
import system from './main/system/system'

interface IRootState{
  name:string
  age:number
}

const store =createStore<IRootState>({
  state:()=>{
    return {
      name:'wang',
      age:21

    }
  },
  getters:{},
  mutations:{
    changeName(state){
      console.log(state);
    }
  },
  actions:{},
  modules:{
    login,
    system
  }
})

export function setupStore(){

  store.dispatch('login/loadLocalLogin')

}

export function useStore():Store<IStoreType>{
  return useVuexStore()
}

export default store
