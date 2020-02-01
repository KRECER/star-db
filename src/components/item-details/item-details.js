import React, { Component } from 'react';
import './item-details.scss';

class ItemDetails extends Component {
  render() {
    return (
      <div className="item-details">
        <div className="item-details__image-wrap">
          <img className="item-details__image" src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt="" width="155"/>
        </div>
        <div className="item-details__content">
          <h2 className="item-details__title">R2-D2</h2>
          <ul className="item-details__list site-list">
            <li className="item-details__item">
              <span className="item-details__item-name">Gender: </span>
              <span className="item-details__item-value">n/a</span>
            </li>
            <li className="item-details__item">
              <span className="item-details__item-name">Birth year: </span>
              <span className="item-details__item-value">33BBY</span>
            </li>
            <li className="item-details__item">
              <span className="item-details__item-name">Eye color: </span>
              <span className="item-details__item-value">red</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
