import axios, { AxiosResponse } from "axios"
import type { AxiosInstance,AxiosRequestConfig } from 'axios'
import type { XWRequestConfig, XWRequestInterceptors } from './type'
import { ElLoading } from "element-plus"
import { LoadingInstance } from "element-plus/es/components/loading/src/loading"



class XWRequest {

  instance:AxiosInstance
  interceptors?:XWRequestInterceptors
  showLoading?:boolean
  loading?:LoadingInstance

  constructor(config:XWRequestConfig){
    // 通过用户传入的 config 创建 axios 实例
    this.instance=axios.create(config)
    // 配置拦截器
    this.interceptors=config.intercepors
    this.showLoading=config.showLoading ?? true

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use((config)=>{
      if(this.showLoading){
        this.loading = ElLoading.service({
        lock:true,
        text:'正在请求数据...',
        background:'rgba(0,0,0,0.5)'
      })
      }

      return config
    },(err)=>{

      return err
    })

    this.instance.interceptors.response.use((res)=>{
      // 将 loading 移除
      setTimeout(() => {
        this.loading?.close()
      }, 1000);

      // 拦截后之返回 data 中的数据
      return res.data
    },(err)=>{
      if(err.response.status===404){
        console.log('404错误');

      }
      return err
    })
  }



  request<T>(config:XWRequestConfig):Promise<T>{
    return new Promise((resolve,reject)=>{
      if(config.intercepors?.requestInterceptor){
        config=config.intercepors.requestInterceptor(config)
      }

      // 判断是否显示 loading
      if(config.showLoading===false){
        this.showLoading=config.showLoading
      }

      this.instance.request<any,T>(config).then((res)=>{
        if(config.intercepors?.responseInterceptor){
        //  res=config.intercepors.responseInterceptor(res)
        }

        this.showLoading=true

        // 将结果 resolve 返回
        resolve(res)
      })
      .catch((err)=>{
        this.showLoading=true
        reject(err)
        return err
      })
    })
  }

  get<T>(config: XWRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: XWRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: XWRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: XWRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}


export default XWRequest
