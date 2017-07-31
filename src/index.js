//module giphy
require('isomorphic-fetch');

module.exports = {
  getGiphy,
};

function getGiphy(query, apiKey) {
  return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=1&offset=0&rating=R&lang=en`)
      .then(response => response.json())
      .then(response => response.data[0].images.original.url)
      .catch(error => null);
}
