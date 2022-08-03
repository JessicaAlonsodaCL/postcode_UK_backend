const axios = require("axios");
const api = axios.create({
    baseURL: 'http://api.postcodes.io/postcodes'
})

module.exports = api;