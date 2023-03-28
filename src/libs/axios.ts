import axios, { AxiosResponse } from "axios"
import { BASE_URL } from "../config";


async function get(url:string,params?:string | undefined, data?: any | undefined) {
  console.log("GET url : ", url )
  // const response = await axios.get(url, {
  //   params:params,
  //   data: data
  // });

  // console.log("Response : ", response);
  return axios.get(url, {
    params:params,
    data: data
  });;
}

async function post(url:string,params:string | undefined, data: any | undefined) : Promise<AxiosResponse<any, any>> {
  const response : AxiosResponse<any, any> = await axios.post(url, {
    params:params,
    data: data
  });

  console.log("Response : ", response);
  return response;
}

// since "delete" is an Reserved keyword we are using "_delete"
async function _delete(url:string,params:string | undefined) {
  const response = await axios.delete(url, {
    params:params,
  });

  console.log("Response : ", response);
  return response;
}

async function put(url:string,params:string | undefined, data: any | undefined) {
  const response = await axios.put(url, {
    params:params,
    data: data
  });

  console.log("Response : ", response);
  return response;
}

async function patch(url:string,params:string | undefined, data: any | undefined) {
  const response = await axios.patch(url, {
    params:params,
    data: data
  });

  console.log("Response : ", response);
  return response;
}

const api = {
  GET : get,
  POST : post,
  DELETE : _delete,
  PUT : put,
  PATCH : patch
}

export default api;