import { AxiosError } from 'axios';
import React, { useState } from 'react'
import { useToastSetters } from '../components/Toast';
import { errorMessageService } from '../middleware/apiCodes';

type OptionsType = {
  errorToast?: {
    showToast : boolean,
    message? : string | undefined | null,
  },
  successToast?: {
    showToast : boolean,
    message : string
  }
}

const optionsDefaultValue:OptionsType = {
  errorToast: {
    showToast : true,
    message : null,
  },
  successToast: {
    showToast : false,
    message : "Success"
  }
}

function useApi<Type>(api:() => Promise<any>, options: OptionsType = optionsDefaultValue) {
  const [loading, setLoading] : [boolean,React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);
  const [data, setData] = useState<Type>();
  const { setErrorToast, setSuccessToast } = useToastSetters();
  let _errorMessage:string = "";

  async function callApi(): Promise<void>{
    try {
      setLoading(true);
      const response = await api();
      setData(response)
      console.log("K1 Response : ", response);
      if(options.successToast?.showToast === true){
        setSuccessToast(options.successToast.message)
      }
      setLoading(true);
    } catch (error) {
      const _error: AxiosError = error as AxiosError ;
      _errorMessage = errorMessageService(_error.response?.status);
      if(options.errorToast?.showToast === true){
        setErrorToast(_errorMessage)
      }
      setLoading(true);
    }
  }

  const result:[
    boolean, 
    Type | undefined,
    () => Promise<void>,string
  ] = [
    loading,
    data,
    callApi,
    _errorMessage,
  ]

  return result
  
}

export default useApi