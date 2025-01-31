require("dotenv").config();
const axios = require("axios");

const url = process.env.BASE_URL;

async function httpHelperFunction(uri) {
  const response = await axios.get(`${url}${uri}`);
  return response.data;
}

module.exports = { httpHelperFunction };
