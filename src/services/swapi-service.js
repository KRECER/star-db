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
    const res = await this.http('/people');
    return res.results;
  }

  async fetchPerson(id) {
    return await this.http(`/people/${id}`);
  }
}

export default SwapiService;