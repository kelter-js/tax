import React from 'react'

class ErrorCatcher extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      'hasError': false,
    };
  }

  static getDerivedStateFromError(e) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Что-то пошло не так!
        </h1>
      );
    }
    return this.props.children;
  }
}

export { ErrorCatcher }
