import React, {Component} from 'react';
import './item-info.scss';
import ItemList from "../item-list";
import ItemDetails from "../item-details";

class ItemInfo extends Component {
  render() {
    return (
      <div className="item-info">
        <div className="item-info__left">
          <ItemList/>
        </div>
        <div className="item-info__right">
          <ItemDetails/>
        </div>
      </div>
    );
  }
}

export default ItemInfo;
