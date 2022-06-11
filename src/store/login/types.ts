export interface ILoginState{
  token:string
  userInfo:any
  userMenus:UserMenu[]
}

export interface UserMenu{
  deleted:number,
  id:number,
  menuDesc:string,
  menuName:string,
  parentMenuId:number,
  pcode:string,
  type:number,
  url:string,
  version:number
}
