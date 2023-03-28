import { Dispatch, SetStateAction } from "react";

export type SetStateT<T> = Dispatch<SetStateAction<T>>;
export interface IAxiosResponse {
  data : any,
  status : number,
  statusText : string
};


export interface IAxiosErrorResponse {
  data : string | undefined | null,
  status : number,
  statusText : string,
  message : string
}

// {
//   "message": "Request failed with status code 500",
//   "name": "AxiosError",
//   "stack": "AxiosError: Request failed with status code 500\n    at settle (http://localhost:3000/static/js/bundle.js:45076:12)\n    at XMLHttpRequest.onloadend (http://localhost:3000/static/js/bundle.js:43771:66)",
//   "config": {
//       "transitional": {
//           "silentJSONParsing": true,
//           "forcedJSONParsing": true,
//           "clarifyTimeoutError": false
//       },
//       "adapter": [
//           "xhr",
//           "http"
//       ],
//       "transformRequest": [
//           null
//       ],
//       "transformResponse": [
//           null
//       ],
//       "timeout": 0,
//       "xsrfCookieName": "XSRF-TOKEN",
//       "xsrfHeaderName": "X-XSRF-TOKEN",
//       "maxContentLength": -1,
//       "maxBodyLength": -1,
//       "env": {},
//       "headers": {
//           "Accept": "application/json, text/plain, */*"
//       },
//       "method": "get",
//       "url": "https://641a7977c152063412da3319.mockapi.io/api/v1/job/100100"
//   },
//   "code": "ERR_BAD_RESPONSE",
//   "status": 500
// }