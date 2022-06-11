let BASE_URL=''
let BASE_NAME=''

if(process.env.NODE_ENV==='development'){
  BASE_URL='http://localhost:8088'
  BASE_NAME='wang'
}else if(process.env.NODE_ENV==='production'){
  BASE_URL='http://localhost:8000/'
  BASE_NAME='wang'
}else{
  BASE_URL='http://localhost:8000/'
  BASE_NAME='wang'
}

export {
  BASE_NAME,
  BASE_URL
}
