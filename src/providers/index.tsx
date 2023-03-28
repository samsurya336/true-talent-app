import React from "react";
import { ToastProvider } from "../components/Toast";
import Toast from "../components/Toast/Toast";
import { ErrorBoundary } from "./ErrorBoundary";

function Providers({ children }: { children: JSX.Element }) {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <>
          <Toast />
          {children}
        </>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default Providers;
