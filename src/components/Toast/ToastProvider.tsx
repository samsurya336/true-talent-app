import React, { useState } from "react";
import { ToastContext } from "./toastContext";

type ToastType = {
  toastType: "ERROR" | "SUCCESS" | "WARNING" | null;
  message: string | null;
};

export function ToastProvider({ children }: { children: JSX.Element }) {
  const [toast, setToast] = useState<ToastType>({
    toastType: null,
    message: null,
  });

  function setErrorToast(message: string) {
    setToast({
      toastType: "ERROR",
      message: message,
    });
  }

  function setSuccessToast(message: string) {
    setToast({
      toastType: "SUCCESS",
      message: message,
    });
  }

  function setWarningToast(message: string) {
    setToast({
      toastType: "WARNING",
      message: message,
    });
  }

  function clearToast() {
    setToast({
      toastType: null,
      message: null,
    });
  }

  return (
    <ToastContext.Provider
      value={{
        toastType: toast.toastType,
        message: toast.message,
        setErrorToast: setErrorToast,
        setSuccessToast: setSuccessToast,
        setWarningToast: setWarningToast,
        clearToast: clearToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}
