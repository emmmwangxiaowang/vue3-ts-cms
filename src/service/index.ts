// service 统一出口

import XWRequest from "./request"
import {BASE_URL} from './request/config'

import localCache from '../utils/cache'

const xwRequest=new XWRequest({
  baseURL:BASE_URL,
  intercepors:{
    requestInterceptor:(config)=>{
      // 携带token的拦截
      const token =localCache.getCache('token')
      if(token){
        config.headers!.Authorization=`Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch:(err)=>{
      return err
    },
    responseInterceptor:(res)=>{
      return res
    },
    responseInterceptorCatch:(err)=>{
      return err
    }
  }
})
export default xwRequest
