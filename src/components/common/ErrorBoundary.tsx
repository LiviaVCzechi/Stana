import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-primary-50">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-primary-600 mb-4">Something went wrong</h1>
            <p className="text-primary-400">Please try refreshing the page</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}