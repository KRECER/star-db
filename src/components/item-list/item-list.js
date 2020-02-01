import React, { Component } from 'react';
import './item-list.scss';

class ItemList extends Component {
  render() {
    return (
      <ul className="item-list site-list">
        <li className="item-list__item">Luke Skywalker (19BBY)</li>
        <li className="item-list__item">C-3PO (112BBY)</li>
        <li className="item-list__item">R2-D2 (33BBY)</li>
        <li className="item-list__item">Darth Vader (41.9BBY)</li>
        <li className="item-list__item">Leia Organa (19BBY)</li>
      </ul>
    );
  }
}

export default ItemList;
