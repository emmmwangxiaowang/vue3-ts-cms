import type { AxiosRequestConfig,AxiosResponse } from "axios"

export interface XWRequestInterceptors{
  requestInterceptor?:(config:AxiosRequestConfig)=>AxiosRequestConfig,
  responseInterceptor?:(res:AxiosResponse)=>AxiosResponse,
  requestInterceptorCatch?:(error:any)=>any
  responseInterceptorCatch?:(error:any)=>any
}

export interface XWRequestConfig extends AxiosRequestConfig{
  intercepors?:XWRequestInterceptors,
  showLoading?:boolean
}
