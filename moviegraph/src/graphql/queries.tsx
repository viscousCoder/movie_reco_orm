import { gql } from "@apollo/client";

export const GET_ALL_TRENDING = gql`
  query GetAllTrending {
    getAllTrending {
      id
      title
      name
      backdrop_path
      poster_path
      release_date
      first_air_date
      vote_average
      vote_count
      media_type
      popularity
    }
  }
`;

export const GET_TRENDING_MOVIES = gql`
  query GetMovies {
    getMovie {
      id
      title
      name
      backdrop_path
      poster_path
      release_date
      first_air_date
      vote_average
      vote_count
      media_type
      popularity
    }
  }
`;

export const GET_TRENDING_TV = gql`
  query GetTvShows {
    getTv {
      id
      title
      name
      backdrop_path
      poster_path
      release_date
      first_air_date
      vote_average
      vote_count
      media_type
      popularity
    }
  }
`;

export const GET_DETAILS = gql`
  query GetDetails($id: ID!, $type: String!) {
    getDetails(id: $id, type: $type) {
      id
      title
      name
      backdrop_path
      poster_path
      overview
      release_date
      first_air_date
      vote_average
      production_companies {
        id
        logo_path
        name
      }
      genres {
        id
        name
      }
      runtime
      spoken_languages {
        english_name
        name
      }
    }
  }
`;

export const GET_CREDIT = gql`
  query GetCredit($id: ID!, $type: String!) {
    getCredit(id: $id, type: $type) {
      id
      cast {
        id
        name
        profile_path
        character
      }
      crew {
        id
        name
        profile_path
        job
      }
    }
  }
`;

export const GET_REVIEW = gql`
  query GetReview($id: ID!, $type: String) {
    getReviews(id: $id, type: $type) {
      author
      author_details {
        name
        username
        avatar_path
        rating
      }
      content
      created_at
    }
  }
`;

export const GET_RECOMMENDED_MOVIE = gql`
  query GetRecommendedMovie($id: ID!) {
    getRecommendedMovie(id: $id) {
      id
      title
      name
      backdrop_path
      poster_path
      release_date
      first_air_date
      vote_average
      vote_count
      media_type
      popularity
    }
  }
`;

export const GET_SIMILAR_MOVIE = gql`
  query GetSimilarMovie($id: ID!) {
    getSimilarMovie(id: $id) {
      id
      title
      name
      backdrop_path
      poster_path
      release_date
      first_air_date
      vote_average
      vote_count
      media_type
      popularity
    }
  }
`;

export const GET_RECOMMENDED_TV = gql`
  query GetRecommendedTv($id: ID!) {
    getRecommendedTv(id: $id) {
      id
      title
      name
      backdrop_path
      poster_path
      release_date
      first_air_date
      vote_average
      vote_count
      media_type
      popularity
    }
  }
`;

export const GET_SIMILAR_TV = gql`
  query GetSimilarTv($id: ID!) {
    getSimilarTv(id: $id) {
      id
      title
      name
      backdrop_path
      poster_path
      release_date
      first_air_date
      vote_average
      vote_count
      media_type
      popularity
    }
  }
`;

export const GET_SEARCH_BAR_DATA = gql`
  query GetSearchData($query: String) {
    getSearchData(query: $query) {
      id
      title
      name
      backdrop_path
      poster_path
      release_date
      first_air_date
      vote_average
      vote_count
      media_type
      popularity
    }
  }
`;
