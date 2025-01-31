// // require("dotenv").config();
// //  const axios = require("axios");
// import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

// const url = process.env.BASE_URL;

// export const httpHelperFunction = async (uri) => {
//   const response = await axios.get(`${url}${uri}`);
//   return response.data;
// };

// // module.exports = { httpHelperFunction };

import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.BASE_URL;
export const httpHelperFunction = async (uri) => {
  try {
    const response = await axios.get(`${url}${uri}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching from ${uri}:`, error);
    throw error;
  }
};
