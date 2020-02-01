import React, { Component } from 'react';
import './random-planet.scss';

class RandomPlanet extends Component {
  render() {
    return (
      <section className="random-planet">
        <div className="random-planet__inner">
          <div className="random-planet__image-wrap">
            <img className="random-planet__image" src="https://starwars-visualguide.com/assets/img/planets/5.jpg" alt="" width="225" height="255"/>
          </div>
          <div className="random-planet__content">
            <h2 className="random-planet__title">Naboo</h2>
            <ul className="random-planet__list site-list">
              <li className="random-planet__item">
                <span className="random-planet__item-name">Population</span>
                <span className="random-planet__item-value">4500000000</span>
              </li>
              <li className="random-planet__item">
                <span className="random-planet__item-name">Rotation&nbsp;Period</span>
                <span className="random-planet__item-value">26</span>
              </li>
              <li className="random-planet__item">
                <span className="random-planet__item-name">Diameter</span>
                <span className="random-planet__item-value">12120</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default RandomPlanet;
