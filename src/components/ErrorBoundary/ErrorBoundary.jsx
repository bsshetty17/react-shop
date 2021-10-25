import { Component, ErrorInfo, ReactNode } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, ErrorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    const { children, fallback } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return fallback;
    }
    return children;
  }
}

export default ErrorBoundary;
