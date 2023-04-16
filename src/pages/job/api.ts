import { AxiosResponse } from "axios";
import { API_VERSION, BASE_URL } from "../../config";
import api from "../../libs/axios";
import { IJob } from "./types";
import { FEATURE_API_VERSION } from "./constants";

// export function getJobs():Promise<AxiosResponse<any, any>>{
//   const url =`${BASE_URL}/api/v1/job`
//   return api.GET(url)
// }

interface ApiRequestInit extends RequestInit {
  url ?: string,
  apiVersion ?: string,
}
type XMLHttpRequestBodyInit = Blob | BufferSource | FormData | URLSearchParams | string;

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


export async function postJob(body:any,options:ApiRequestInit = {}): Promise<IJob[] | null>{
  const _apiVersion = options.apiVersion || FEATURE_API_VERSION
  const url = `${BASE_URL}/api/${_apiVersion}/job`;
  options.method = "POST";
  if(body && typeof body === "object"){
    options.body = JSON.stringify(body)
  }

  const response = await fetch(url,options);
  const result = await response.json();

  if(result && result.data) {
    const _result : IJob[] = result.data;
    return _result;
  } else {
    return null;
  }
}