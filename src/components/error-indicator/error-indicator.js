import React, { Component } from 'react';
import './error-indicator.scss';
import icon from './deadly-moon.png';

class ErrorIndicator extends Component {
  render() {
    return (
      <div className="error-indicator">
        <img className="error-indicator__icon" src={icon} width="75" alt="error icon"/>
        <h2 className="error-indicator__title">BOOM!</h2>
        <p className="error-indicator__descr">something has gone terribly wrong <br/> (but we already sent droids to fix it)</p>
      </div>
    );
  }
}

export default ErrorIndicator;
