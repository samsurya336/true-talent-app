import { createContext, useContext } from "react";

export const ToastContext = createContext<{
  toastType: "ERROR" | "SUCCESS" | "WARNING" | null;
  message: string | null;
  setErrorToast: (message: string) => void;
  setSuccessToast: (message: string) => void;
  setWarningToast: (message: string) => void;
  clearToast: () => void;
}>({
  toastType: null,
  message: null,
  setErrorToast: () => {},
  setSuccessToast: () => {},
  setWarningToast: () => {},
  clearToast: () => {},
});

export function useToast(){
  const { toastType, message } = useContext(ToastContext);
  return {
    toastType : toastType,
    message : message
  }
}

export function useToastSetters(){
  const { setErrorToast, setSuccessToast, setWarningToast, clearToast } = useContext(ToastContext);
  return {
    setErrorToast : setErrorToast, 
    setSuccessToast : setSuccessToast, 
    setWarningToast : setWarningToast, 
    clearToast : clearToast
  }
}