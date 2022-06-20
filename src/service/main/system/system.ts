import xwRequest from "@/service";

import { IDataType } from "../../types"

export function getPageListData(url:string,queryInfo:any){
  return xwRequest.post<IDataType>({
    url:url,
    data:queryInfo
  })
}
