export function errorMessageService(statusCode : number | string | undefined, message:string = ""): string {
  let result:string = message;
  if(statusCode && statusCode >= 500 ){
    result = "Oops, We are Busy little at the Moment !!"
  } else if(statusCode && statusCode >= 401 && statusCode <= 407 ) {
    // logOut()
    result = "Something went wrong"
  } else if(statusCode && statusCode > 407 && statusCode < 600 ) {
    result = message || "Something went wrong"
  } else {
    result = message || "Something went wrong"
  }
  return result;
}