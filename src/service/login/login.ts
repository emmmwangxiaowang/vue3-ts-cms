import xwRequest from "..";
import  { IAccount, ILoginResult } from "./types";
import { IDataType } from "../types"

enum LoginAPI{
  BaseUrl='/employee',
  AccountLogin='/login',
  LoginUserInfo='/users/',
  UserMenus='/role/'
}

export function accoutnLoginRequest(account:IAccount){
  return xwRequest.post<IDataType<ILoginResult>>({
    url:LoginAPI.BaseUrl+LoginAPI.AccountLogin,
    data:account
  })
}

export function requestUserInfoById(id:number){
  return xwRequest.get<IDataType<any>>({
    url:LoginAPI.BaseUrl +LoginAPI.LoginUserInfo+id,
    showLoading:false
  })
}

export function requestUserMenusByRoleId(id:number){
  return xwRequest.post<IDataType>({
    url:LoginAPI.BaseUrl+LoginAPI.UserMenus+id+'/menu',
    showLoading:false
  })
}
