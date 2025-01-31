// import CompanyDetails from "../entity/CompanyDetails";
// import Details from "../entity/Details";
// import Genre from "../entity/Genre";
// import Language from "../entity/Language";
// import { dataSource } from "../database/database";

// const { dataSource } = require("../database/database");
const Alltrending = require("../entity/Alltrending");
const CompanyDetails = require("../entity/CompanyDetails");
const Details = require("../entity/Details");
const Genre = require("../entity/Genre");
const Language = require("../entity/Language");
const { dataSource } = require("../database/database");
const Review = require("../entity/Review");

/**
 * @function it is used to insert the data(trending,movie,tv,smiliar,recommended) to the table
 * @param it take array of objects, in which some details about the movie or tv show are stored
 * @working before inserting new data into the db it firstly delete the previous one and then insert the new one.
 */
const insertTrendingData = async (data) => {
  try {
    const trendingRepo = dataSource.getRepository(Alltrending);
    await trendingRepo.clear();
    const result = await trendingRepo.save(data);
    return result;
  } catch (err) {
    console.error("Error inserting data:", err);
  }
};
/**
 * @function it is userd to insert the particular movie or tv details
 * @params it take an object which contain the details of the that movie or tv show
 * @working before inserting new data into the db it first delete the previous one and then insert the new one.
 */

const insertDetailsData = async (data) => {
  const detailsRepo = dataSource.getRepository(Details);
  const companyRepo = dataSource.getRepository(CompanyDetails);
  const genreRepo = dataSource.getRepository(Genre);
  const languageRepo = dataSource.getRepository(Language);
  // await companyRepo.clear();
  // await genreRepo.clear();
  // await languageRepo.clear();
  // await detailsRepo.clear();
  await dataSource.query(
    "TRUNCATE TABLE company_details, genre, language, details RESTART IDENTITY CASCADE"
  );

  console.log("hii");
  try {
    console.log("herer");
    const details = {};
    details.id = data.id;
    details.backdrop_path = data.backdrop_path;
    details.poster_path = data.poster_path;
    details.title = data.title || data.name;
    details.name = data.name;
    details.overview = data.overview;
    details.release_date = data.release_date;
    details.first_air_date = data.first_air_date;
    details.vote_average = data.vote_average;
    details.media_type = data.media_type;
    details.runtime = data.runtime;

    details.production_companies = await Promise.all(
      data.production_companies.map(async (company) => {
        let existingCompany = await companyRepo.findOne({
          where: { name: company.name },
        });
        if (!existingCompany) {
          existingCompany = companyRepo.create({
            id: company.id,
            name: company.name,
            logo_path: company.logo_path,
          });
          await companyRepo.save(existingCompany);
        }
        return existingCompany;
      })
    );
    console.log(details, "below comapny language");

    details.genres = await Promise.all(
      data.genres.map(async (genre) => {
        let existingGenre = await genreRepo.findOne({
          where: { name: genre.name },
        });
        if (!existingGenre) {
          existingGenre = genreRepo.create({ name: genre.name });
          await genreRepo.save(existingGenre);
        }
        return existingGenre;
      })
    );
    console.log(details, "below comapny genrer");

    details.spoken_languages = await Promise.all(
      data.spoken_languages.map(async (language) => {
        let existingLanguage = [];
        // if (!existingLanguage) {
        existingLanguage = languageRepo.create({
          english_name: language.english_name,
          name: language.name,
        });
        await languageRepo.save(existingLanguage);
        // }
        return existingLanguage;
      })
    );

    console.log("end here", details);
    await detailsRepo.save(details);
    console.log("Details inserted successfully");
  } catch (error) {
    console.error("Error inserting details:", error);
  }
};

/**
 * @function it is used to insert the movie or tv show reviews
 * @param {*} type it describe or hold i.e., it is movie or show/tv
 * @param {*} id it hold the movie or tv show id
 * @param {*} reviews it contain the array of object which have a review of that particular movie or tv show have.
 * @working before inserting new data into the db it first delete the previous one and then insert the new one.
 */

const insertReviews = async (type, id, reviews) => {
  const reviewRepo = dataSource.getRepository(Review);
  try {
    await reviewRepo.delete({ reference_id: id });

    for (let review of reviews) {
      const { author_details, content, created_at } = review;
      const { name, username, avatar_path, rating } = author_details || {};
      const createdAtTimestamp = new Date(parseInt(created_at));

      const reviewEntity = {};
      reviewEntity.author_name = name || null;
      reviewEntity.username = username || null;
      reviewEntity.avatar_path = avatar_path || null;
      reviewEntity.rating = rating || null;
      reviewEntity.content = content;
      reviewEntity.created_at = createdAtTimestamp;
      reviewEntity.type = type;
      reviewEntity.reference_id = id;

      await reviewRepo.save(reviewEntity);
    }
  } catch (err) {
    console.error("Error inserting reviews:", err);
  }
  console.log("finally");
};

/**
 * @function it is used to insert the credit details of the cast and crew of that particular movie or tv show
 * @param {*} id it hold the movie or tv id
 * @param {*} castArray it is a array of object of casts
 * @param {*} crewArray it is a array of object of crew
 * @working before inserting new data into the db it first delete the previous one and then insert the new one.
 */

const insertCreditData = async (creditId, castArray, crewArray) => {
  const creditRepository = dataSource.getRepository("Credits");
  const castRepository = dataSource.getRepository("Casts");
  const crewRepository = dataSource.getRepository("Crew");

  try {
    await creditRepository.query("BEGIN");

    await castRepository.delete({});
    await crewRepository.delete({});

    await creditRepository.delete({});

    const newCredit = await creditRepository.save({ credit_id: creditId });

    const crewData = crewArray.map((crew) => ({
      crew_id: crew.id,
      name: crew.name,
      profile_path: crew.profile_path,
      job: crew.job,
      credit: newCredit,
    }));
    await crewRepository.save(crewData);

    const castData = castArray.map((cast) => ({
      cast_id: cast.id,
      name: cast.name,
      profile_path: cast.profile_path,
      character: cast.character,
      credit: newCredit,
    }));
    await castRepository.save(castData);

    console.log("Data inserted successfully");
  } catch (error) {
    await creditRepository.query("ROLLBACK");
    console.error("Error inserting data:", error);
    throw error;
  }
};

module.exports = { insertCreditData };

module.exports = {
  insertTrendingData,
  insertDetailsData,
  insertReviews,
  insertCreditData,
};
