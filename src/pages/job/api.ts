import { AxiosResponse } from "axios";
import { BASE_URL } from "../../config";
import api from "../../libs/axios";
import { IJob } from "./types";

// export function getJobs():Promise<AxiosResponse<any, any>>{
//   const url =`${BASE_URL}/api/v1/job`
//   return api.GET(url)
// }

export async function getJobs(): Promise<IJob[] | AxiosResponse<any, any>>{
  const url =`${BASE_URL}/api/v1/job`
  const response:AxiosResponse<any, any> = await api.GET(url);
  if(response && response.data && Array.isArray(response.data) ) {
    const result : IJob[] = response.data;
    return result;
  } else {
    return response;
  }
}

export function addJob(body: string | null ){
  return {
    url: `${BASE_URL}/api/v1/job`,
    method : "POST",
    body : body
  }
}