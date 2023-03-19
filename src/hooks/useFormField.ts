import React, { ChangeEvent, Dispatch, useEffect, useState } from 'react'

type Props = {
  [key : string] : {
    value? : string | number | boolean | readonly string[] | undefined | null
  }
};

export interface IFInitialValue {
  [key : string] : {
    name : string;
    value : string | number| boolean | readonly string[] | undefined | null,
    error : string | null,
    onValueChange : (value : string | null | undefined) => void,
    setError : (value : string | null) => void,
  },
}

export default function useFormField(initialValue: Props) {
      const [result, setResult] = useState(setInitialValue);

  function setInitialValue(){
    let result: IFInitialValue = {}
    for (const key in initialValue) {
     result[key] = {
      name : key,
      value : initialValue[key].value,
      error : null,
      onValueChange : (value) => {
        setResult((prevState) => {
          return {
            ...prevState,
            [key] : {
              ...prevState[key],
              value : value
            }
          }
        })
      },
      setError : (error) => {
        setResult((prevState) => {
          return {
            ...prevState,
            [key] : {
              ...prevState[key],
              error : error
            }
          }
        })
      }
     }
    };
    return result;
  }

  const setErrors = (errors:{[key : string]:string | null}) => {
    let data = {...result};
    for (const key in errors) {
      data[key] = {
        ...data[key],
        error: errors[key]
      }
    }
    setResult({...data})
  }

  return {
    data : ({ ...result }) as IFInitialValue,
    onFormChange : setResult,
    setErrors: setErrors
  }
}