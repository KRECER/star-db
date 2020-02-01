import React, { Component } from 'react';
import './app-header.scss';
import Logo from "../logo";
import MainNav from "../main-nav";


class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="app-header__inner container">
          <Logo />
          <MainNav />
        </div>
      </header>
    );
  }
}

export default AppHeader;
