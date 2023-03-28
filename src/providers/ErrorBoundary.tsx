import React, { ErrorInfo } from "react";

interface Props {
  children: JSX.Element;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // logErrorToMyService(error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <h1>oops</h1>;
    }

    return this.props.children;
  }
}
