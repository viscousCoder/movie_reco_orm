// const {
//   insertTrendingData,
//   insertDetailsData,
//   insertReviews,
//   insertCredits,
//   insertCreditData,
// } = require("../addingToDatabase/allfunction");
// const {
//   trendingMoviesShows,
//   trendingMovies,
//   tredingTvShows,
//   getMovieShowDetails,
//   getCreditDetails,
//   getRecommendedMovieData,
//   getSimilarMovieData,
//   getRecommendedTvData,
//   getSimilarTvData,
//   getReviewData,
//   getSearchbarData,
// } = require("../CallApi/callingApi");
// const {
//   fetchAllTrendingData,
//   fetchDetailsData,
//   getReviewsFromDb,
//   getReviews,
//   // getCredits,
//   getCreditData,
// } = require("../gettingFromDatabase/gettingFromDb");

import {
  insertTrendingData,
  insertDetailsData,
  insertReviews,
  // insertCredits,
  insertCreditData,
} from "../addingToDatabase/allfunction.js";

import {
  trendingMoviesShows,
  trendingMovies,
  tredingTvShows,
  getMovieShowDetails,
  getCreditDetails,
  getRecommendedMovieData,
  getSimilarMovieData,
  getRecommendedTvData,
  getSimilarTvData,
  getReviewData,
  getSearchbarData,
} from "../CallApi/callingApi.js";

import {
  fetchAllTrendingData,
  fetchDetailsData,
  // getReviewsFromDb,
  getReviews,
  // getCredits,
  getCreditData,
} from "../gettingFromDatabase/gettingFromDb.js";

export const graphQLResolver = {
  Query: {
    /**
     * @function getting all trending movies and shows
     * @return array of object
     */
    getAllTrending: async () => {
      // console.log("hii");
      try {
        const data = await trendingMoviesShows();
        // console.log(data);
        // console.log("here");
        await insertTrendingData(data);
        // console.log("hoi");
        const allTrendingData = await fetchAllTrendingData();
        // console.log(allTrendingData, "hii");
        return allTrendingData;
      } catch (error) {
        // console.error("Error fetching trending movies and shows:", error);
        throw new Error("Failed to fetch trending movies.");
      }
    },

    /**
     * @function getting all trending movies
     * @return array of object
     */
    getMovie: async () => {
      try {
        const data = await trendingMovies();
        // console.log(data);
        await insertTrendingData(data);
        const allTrendingData = await fetchAllTrendingData();
        return allTrendingData;
      } catch (error) {
        // console.log("Error fetching trending movies:", error);
        throw new Error("Failed to fetch trending movies.");
      }
    },

    /**
     * @function getting all trending shows
     * @return array of object
     */
    getTv: async () => {
      try {
        const data = await tredingTvShows();
        await insertTrendingData(data);
        const allTrendingData = await fetchAllTrendingData();
        return allTrendingData;
      } catch (error) {
        // console.error("Error fetching trending shows:", error);
        throw new Error("Failed to fetch trending shows.");
      }
    },

    /**
     * @function getting all the details of the slected one
     * @param {*} _ parentvalue but not need in this function
     * @param {Number} param1 id of selected movie or tv show
     * @param {String} param2 type that the selected one is movie or tv show
     * @returns object that contain the details about the slected one
     */
    getDetails: async (_, { id, type }) => {
      try {
        const data = await getMovieShowDetails(type, id);
        // console.log(data);
        await insertDetailsData(data);
        const fetchData = await fetchDetailsData(data.id);
        // console.log(fetchData);
        return fetchData;
        // return data;
      } catch (error) {
        // console.error("Error fetching details:", error);
        throw new Error("Failed to fetch Details.");
      }
    },

    /**
     * @function getting all credit of the slected one
     * @param {*} _ parentvalue but not need in this function
     * @param {Number} param1 id of selected movie or tv show
     * @param {String} param2 type that the selected one is movie or tv show
     * @returns object that contain the details about the slected one cast and crews
     */
    getCredit: async (_, { type, id }) => {
      try {
        const data = await getCreditDetails(type, id);
        // console.log(data);
        await insertCreditData(data.id, data.cast, data.crew);
        const resultData = await getCreditData(id);
        return resultData;
      } catch (error) {
        // console.error("Error fetching details:", error);
        // console.log("hii");
        throw new Error("Failed to fetch details.", error);
      }
    },

    /**
     * @function for getting the recommended movies
     * @param {*} _ parentValue but not needed in this function
     * @param {Number} param1 id of the slected movie
     * @returns array of object of recommended movies
     */
    getRecommendedMovie: async (_, { id }) => {
      // console.log("recom", { id });
      try {
        const data = await getRecommendedMovieData(id);
        // return data;
        await insertTrendingData(data);
        const allTrendingData = await fetchAllTrendingData();
        return allTrendingData;
      } catch (error) {
        // console.error("Error fetching recommended movies:", error);
        throw new Error("Failed to fetch recommended movies.");
      }
    },

    /**
     * @function for getting the similar movies
     * @param {*} _ parentValue but not needed in this function
     * @param {Number} param1 id of the slected movie
     * @returns array of object of similar movies
     */
    getSimilarMovie: async (_, { id }) => {
      try {
        const data = await getSimilarMovieData(id);
        // return data;
        await insertTrendingData(data);
        const allTrendingData = await fetchAllTrendingData();
        return allTrendingData;
      } catch (error) {
        // console.error("Error fetching similar movies:", error);
        throw new Error("Failed to fetch similar movies.");
      }
    },

    /**
     * @function for getting the recommended tv shows
     * @param {*} _ parentValue but not needed in this function
     * @param {Number} param1 id of the slected tv show
     * @returns array of object of similar tv shows
     */
    getRecommendedTv: async (_, { id }) => {
      try {
        const data = await getRecommendedTvData(id);
        // return data;
        await insertTrendingData(data);
        const allTrendingData = await fetchAllTrendingData();
        return allTrendingData;
      } catch (error) {
        // console.error("Error fetching recommended TV:", error);
        throw new Error("Failed to fetch recommended TV.");
      }
    },

    /**
     * @function for getting the similar tv shows
     * @param {*} _ parentValue but not needed in this function
     * @param {Number} param1 id of the slected tv show
     * @returns array of object of similar tv shows
     */
    getSimilarTv: async (_, { id }) => {
      try {
        const data = await getSimilarTvData(id);
        // return data;
        await insertTrendingData(data);
        const allTrendingData = await fetchAllTrendingData();
        return allTrendingData;
      } catch (error) {
        // console.error("Error fetching similar TV:", error);
        throw new Error("Failed to fetch similar TV.");
      }
    },

    /**
     * @function for getting the reviews of the movie or tv show
     * @param {*} _ parentValue but not needed in this function
     * @param {{type:String,id:Number}} type type that is the selected one is movie or tv shows
     * @param id id of the selected movie or tv show
     * @returns
     */
    getReviews: async (_, { type, id }) => {
      try {
        const data = await getReviewData(type, id);
        await insertReviews(type, id, data); // Insert the reviews into the database

        // Then, fetch the reviews from the database
        const reviewData = await getReviews(id);
        // console.log(reviewData, "Hii");
        return reviewData;
        // console.log(data);
        // return data;
      } catch (error) {
        // console.error("Error fetching details:", error);
        throw new Error("Failed to fetch details.");
      }
    },

    /**
     * @function for getting the movis list
     * @param {*} _ parentValue but not needed in this function
     * @param {String} query search of the user
     * @returns array of object conatining movies list
     */
    getSearchData: async (_, { query }) => {
      try {
        const data = await getSearchbarData(query);
        // return data;
        await insertTrendingData(data);
        const allTrendingData = await fetchAllTrendingData();
        return allTrendingData;
      } catch (error) {
        // console.error("Error fetching details:", error);
        throw new Error("Failed to fetch details.");
      }
    },
  },
};

// module.exports = { graphQLResolver };
