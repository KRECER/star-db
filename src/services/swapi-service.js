class SwapiService {

  #baseUrl = 'https://swapi.co/api';

  async http(route) {
    const res = await fetch(`${this.#baseUrl}${route}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${route}, received ${res.status}`);
    }

    return await res.json();
  }

  async fetchAllPeople() {
    const res = await this.http('/people/');
    return res.results.map(this.#transformPerson);
  }

  async fetchPerson(id) {
    const person = await this.http(`/people/${id}/`);
    return this.#transformPerson(person);
  }

  async fetchAllPlanets() {
    const res = await this.http('/planets/');
    return res.results.map(this.#transformPlanet);
  }

  async fetchPlanet(id) {
    const planet = await this.http(`/planets/${id}/`);
    return this.#transformPlanet(planet);
  }

  #extractId = (item) => {
    const idRegExp = /\/(\d*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  async fetchAllStarships() {
    const res = await this.http('/starships/');
    return res.results.map(this.#transformStarship);
  }

  async fetchStarship(id) {
    const starship =  await this.http(`/starships/${id}/`);
    return this.#transformStarship(starship);
  }

  #transformPlanet = (planet) => {
    return {
      id: this.#extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  };

  #transformStarship = (starship) => {
    return {
      id: this.#extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  };

  #transformPerson = (person) => {
    return {
      id: this.#extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  };
}

export default SwapiService;