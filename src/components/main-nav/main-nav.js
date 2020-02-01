import React, { Component } from 'react';
import './main-nav.scss';

class MainNav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <ul className="main-nav__list site-list">
          <li className="main-nav__item"><a className="main-nav__link" href="/people">People</a></li>
          <li className="main-nav__item"><a className="main-nav__link" href="/planets">Planets</a></li>
          <li className="main-nav__item"><a className="main-nav__link" href="/starships">Starships</a></li>
        </ul>
      </nav>
    );
  }
}

export default MainNav;
