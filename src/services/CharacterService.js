let axios = require('axios');
const baseUrl = require('./conf').baseUrl;

export function loadCharacters() {
  return axios.get(`${baseUrl}/api/characters`).then(response => {
    return response['data'].map((character) => {
      return {
        name: character["name"],
        description: character["description"],
        image: `https://swgoh.gg${character["image"]}`,
        categories: character["categories"].map((c) => { return c.name; }).join(", ")
      };
    });
  });
}
