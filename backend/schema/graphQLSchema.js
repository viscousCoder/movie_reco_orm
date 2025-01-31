const graphQLSchema = `#graphql
type AllTrending{
    id:ID,
    title:String,
    name:String,
    backdrop_path:String,
    profile_path:String,
    poster_path:String,
    release_date:String,
    first_air_date:String,
    vote_average:Float,
    vote_count:Int,
    media_type:String,
    popularity:String,
}

type CompanyDetails{
    id:ID,
    logo_path:String,
    name:String,
}
type Genre{
    id:ID,
    name:String
}
type Language{
    english_name:String,
    name:String
}
   

type Details{
    id:ID,
    backdrop_path:String,
    poster_path:String,
    title:String,
    name:String,
    overview:String,
    release_date:String,
    first_air_date:String,
    vote_average:Float,
    production_companies:[CompanyDetails],
    media_type:String,
    genres:[Genre]
    runtime:Int
    spoken_languages:[Language]
}


type CastCrewDetails{
    id:ID,
    name:String,
    profile_path:String
    character:String,
    job:String
}

type Credit{
    id:ID,
    cast:[CastCrewDetails],
    crew:[CastCrewDetails]
}

type Author{
    name:String,
    username:String,
    avatar_path:String
    rating:Float        
}

type Review{
    id:ID,
    author:String
    author_details:Author,
    content:String,
    created_at:String,
}

type Query{
    getAllTrending:[AllTrending],
    getMovie:[AllTrending],
    getTv:[AllTrending],
    getDetails(id:ID,type:String):Details,
    getCredit(id:ID,type:String):Credit,
    getRecommendedMovie(id:ID):[AllTrending]
    getSimilarMovie(id:ID):[AllTrending]
    getRecommendedTv(id:ID):[AllTrending]
    getSimilarTv(id:ID):[AllTrending]
    getReviews(id:ID,type:String):[Review]
    getSearchData(query:String):[AllTrending]
}
`;

module.exports = { graphQLSchema };
