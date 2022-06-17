
import { createStore,Store,useStore as useVuexStore } from "vuex";
import { IStoreType } from "./main/types";

import login from './login/login'

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
    login
  }
})

export function setupStore(){
  console.log('进入了setup');

  store.dispatch('login/loadLocalLogin')
  console.log('setup结束了');

}

export function useStore():Store<IStoreType>{
  return useVuexStore()
}

export default store
