
import { createStore,Store,useStore as useVuexStore } from "vuex";
import { IStoreType } from "./main/types";

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
  actions:{}
})

export function setupStore(){
  store.dispatch('login/loadLocalLogin')
}

export function useStore():Store<IStoreType>{
  return useVuexStore()
}

export default store
