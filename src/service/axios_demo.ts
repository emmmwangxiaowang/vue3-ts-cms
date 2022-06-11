import axios from "axios";

// 例1
// axios.get('http://123.207.32.32:8000/home/multidata').then((res)=>{
//   console.log(res)
// })

// 配置
// axios.defaults.baseURL='http://localhost:8000'

axios.get('http://localhost:8000/axios-server',{
  params:{
    name:'wang',
    age:21
  }
}).then((res)=>{
  console.log(res)
})

axios.post('http://localhost:8000/axios-server',{
  data:{
    name:'wang',
    age:21
  }
}).then((res)=>{
  console.log(res)
})

// axios 拦截器
axios.interceptors.request.use((config)=>{
  // 给请求添加token
  // loding动画
  console.log('请求拦截成功')
 return config
},(err)=>{
  console.log('请求发生错误')
  return err
})

axios.interceptors.response.use((res)=>{
  console.log('拦截成功');
  return res.data
},(err)=>{
  console.log('拦截失败')
  return err
})
