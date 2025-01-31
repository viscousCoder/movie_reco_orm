const { pool, dataSource } = require("../database/database");
const Alltrending = require("../entity/Alltrending");
const Details = require("../entity/Details");
const CompanyDetails = require("../entity/CompanyDetails");
const Genre = require("../entity/Genre");
const Language = require("../entity/Language");
const Review = require("../entity/Review");
const Credit = require("../entity/Credit");
const Cast = require("../entity/Cast");
const Crew = require("../entity/Crew");

/**
 * @function to get the movie or tv shows or trending list of data from the db
 * @returns the array of object containing
 */
const fetchAllTrendingData = async () => {
  try {
    const trendingRepo = dataSource.getRepository(Alltrending);
    const result = await trendingRepo.find();
    return result;
  } catch (error) {
    console.error("Error fetching data from the database:", error);
    throw new Error("Failed to fetch data from the database.");
  }
};
/**
 * @function to get the movie or tv shows or trending list of data from the db
 * @param {Number} id of the selected movie or tv shows
 * @returns object that conatins details
 */

const fetchDetailsData = async (id) => {
  try {
    // Fetch the Details record by ID, including related production companies, genres, and spoken languages
    const details = await dataSource.getRepository(Details).findOne({
      where: { id: id },
      relations: ["production_companies", "genres", "spoken_languages"],
    });

    if (!details) {
      throw new Error(`Details not found for id: ${id}`);
    }

    console.log("Here is result", details);
    // Return the fetched details with associated entities
    return details;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw new Error("Failed to fetch inserted data.");
  }
};

/**
 *
 * @param {Number} id of the slected movie or tv shows
 * @returns array of the review list
 */

const getReviews = async (id) => {
  const reviewRepo = dataSource.getRepository(Review);
  console.log("review Result", id);
  try {
    // Fetch reviews based on reference_id
    const reviews = await reviewRepo.find({
      where: { reference_id: id },
      select: [
        "author_name",
        "username",
        "avatar_path",
        "rating",
        "content",
        "created_at",
        "type",
        "reference_id",
      ],
    });

    // Transform reviews into the desired format
    const result = reviews.map((review) => ({
      author_details: {
        name: review.author_name,
        username: review.username,
        avatar_path: review.avatar_path,
        rating: review.rating,
      },
      content: review.content,
      created_at: review.created_at.toISOString(),
    }));
    console.log("review Result", result);
    return result;
  } catch (err) {
    console.error("Error fetching reviews:", err);
    throw new Error("Failed to fetch reviews.");
  }
};

/**
 * @function to get the credit of the selected movie or tv shows
 * @param {Number} id of the slected movie or tv shows
 * @returns object that contained id and array of object for cast and crew
 */

const getCreditData = async (creditId) => {
  const creditRepository = dataSource.getRepository(Credit);
  const castRepository = dataSource.getRepository(Cast);
  const crewRepository = dataSource.getRepository(Crew);

  try {
    // Fetch credit entry
    const credit = await creditRepository.findOne({
      where: { credit_id: creditId },
    });

    if (!credit) {
      throw new Error("Credit not found");
    }

    // Fetch related crew members
    const crew = await crewRepository.find({
      where: { credit: credit.id },
      select: ["crew_id", "name", "profile_path", "job"],
    });

    // Fetch related cast members
    const cast = await castRepository.find({
      where: { credit: credit.id },
      select: ["cast_id", "name", "profile_path", "character"],
    });

    return {
      creditId: credit.credit_id,
      crew: crew.map((c) => ({
        id: c.crew_id,
        name: c.name,
        profile_path: c.profile_path,
        job: c.job,
      })),
      cast: cast.map((c) => ({
        id: c.cast_id,
        name: c.name,
        profile_path: c.profile_path,
        character: c.character,
      })),
    };
  } catch (error) {
    console.error("Error fetching credit data:", error);
    throw error;
  }
};

module.exports = {
  fetchAllTrendingData,
  fetchDetailsData,
  getReviews,
  // getCredits,
  getCreditData,
};
