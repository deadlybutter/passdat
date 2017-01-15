import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class EnsureAuth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false
    };
  }

  componentDidMount() {
    this.setState({authenticated: true});
    // setTimeout(() => {
    //   this.setState({authenticated: true});
    // }, 500);
    // setTimeout(() => {
    //   browserHistory.push('/login');
    // }, 1000);
  }

  render() {
    if (this.state.authenticated) return this.props.children;

    return (
      <div className="container -fullscreen modal -vertical">
        <div className="wrapper">
          <h1>Authenticating...</h1>
        </div>
      </div>
    )
  }
}

module.exports = EnsureAuth;
