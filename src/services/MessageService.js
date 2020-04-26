let axios = require('axios');
const baseUrl = require('./conf').baseUrl;

export function loadMessage() {
  return axios.get(`${baseUrl}/api/messages`).then(response => {
    return response['data'][0].message;
  });
}
