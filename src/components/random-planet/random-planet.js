import React, {Component} from 'react';
import './random-planet.scss';
import SwapiService from "../../services/swapi-service";
import Preloader from "../preloader";
import ErrorIndicator from "../error-indicator";

class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  planetLoadedHandler = (planet) => {
    this.setState({planet, loading: false});
  };

  errorHandler = (error) => {
    this.setState({error: true, loading: false});
  };

  updatePlanet() {
    this.swapiService.fetchPlanet(1200323)
      .then(this.planetLoadedHandler)
      .catch(this.errorHandler);
  }

  componentDidMount() {
    this.updatePlanet();
  }

  render() {

    const {planet, loading, error} = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Preloader/> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <section className="random-planet">
          {spinner}
          {content}
          {errorMessage}
      </section>
    );
  }
}

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;

  return (
    <div className="random-planet__inner">
      <div className="random-planet__image-wrap">
        <img className="random-planet__image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
             alt="image planet"
             width="225"
             height="255"
        />
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
    </div>
  );
};

export default RandomPlanet;
