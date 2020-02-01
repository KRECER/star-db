import React, {Component} from 'react';
import './random-planet.scss';
import SwapiService from "../../services/swapi-service";
import Preloader from "../preloader";

class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  planetLoadedHandler = (planet) => {
    this.setState({planet, loading: false});
  };

  updatePlanet() {
    this.swapiService.fetchPlanet(3).then(this.planetLoadedHandler);
  }

  componentDidMount() {
    this.updatePlanet();
  }

  render() {

    const {planet, loading} = this.state;
    const spinner = loading ? <Preloader/> : null;
    const content = !loading ? <PlanetView planet={planet}/> : null;

    return (
      <section className="random-planet">
        <div className="random-planet__inner">
          {spinner}
          {content}
        </div>
      </section>
    );
  }
}

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;

  return (
    <React.Fragment>
      <div className="random-planet__image-wrap">
        <img className="random-planet__image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
             alt="" width="225" height="255"/>
      </div>
      <div className="random-planet__content">
        <h2 className="random-planet__title">{name}</h2>
        <ul className="random-planet__list site-list">
          <li className="random-planet__item">
            <span className="random-planet__item-name">Population</span>
            <span className="random-planet__item-value">{population}</span>
          </li>
          <li className="random-planet__item">
            <span className="random-planet__item-name">Rotation&nbsp;Period</span>
            <span className="random-planet__item-value">{rotationPeriod}</span>
          </li>
          <li className="random-planet__item">
            <span className="random-planet__item-name">Diameter</span>
            <span className="random-planet__item-value">{diameter}</span>
          </li>
        </ul>
      </div>

    </React.Fragment>
  );
};

export default RandomPlanet;
