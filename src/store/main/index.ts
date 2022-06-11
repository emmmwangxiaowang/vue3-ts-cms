import { createStore } from "vuex";

import { IRootState } from "./types";
import login from "../login/login";

const store =createStore<IRootState>({
  state:()=>{
    return {
      name:'wang',
      age:21,
    }
  },
  mutations:{
    changeName(state){
      console.log(state)
    }
  },
  getters:{},
  actions:{},
  modules:{
    login
  }
})

export default store;
