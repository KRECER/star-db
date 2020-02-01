import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import SwapiService from "./services/swapi-service";

const swapiService = new SwapiService();

swapiService.fetchPerson(1)
  .then((body) => {
    console.log(body);
  });

ReactDOM.render(<App />, document.getElementById('root'));
