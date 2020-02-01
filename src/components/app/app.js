import React, { Component } from 'react';
import "./app.scss";
import AppHeader from "../app-header";
import RandomPlanet from "../random-planet";
import ItemInfo from "../item-info";

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <main className="app__main-content container">
          <RandomPlanet />
          <ItemInfo />
        </main>
      </div>
    );
  }
}

export default App;
