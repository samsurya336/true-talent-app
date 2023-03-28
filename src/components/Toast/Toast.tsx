import React, { useEffect, useState } from "react";
import { useToast, useToastSetters } from "./toastContext";

function Toast() {
  const [showToast, setShowToast] = useState(false);

  const statusToastState = useToast();
  const { clearToast } = useToastSetters();

  useEffect(() => {
    if (showToast === false) {
      setTimeout(() => {
        clearToast();
      }, 1000);
    }
  }, [showToast]);

  useEffect(() => {
    if (typeof statusToastState.toastType === "string") {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  }, [statusToastState.message, statusToastState.toastType]);

  function toastType() {
    const _toastType = statusToastState.toastType;
    let result = "";
    if (typeof _toastType === "string") {
      result = _toastType.toLocaleLowerCase();
    }
    return result;
  }

  return (
    <>
      <section
        className={`min-h-fit min-w-[220px] max-w-[50%] md:max-w-[90%] bg-${toastType()} fixed z-10 -translate-x-1/2 left-1/2 rounded-lg p-4 transition-all duration-300 text-center ${
          showToast === true ? "top-[10%]" : "-top-[10%]"
        } `}
      >
        <p className="text-white">
          {typeof statusToastState.message === "string" &&
            `${statusToastState.message}`}
        </p>
      </section>
    </>
  );
}

export default Toast;
