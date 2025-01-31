import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { MovieCreationOutlined } from "@mui/icons-material";
import RecomSimilar from "./RecomSimilar";
import CastCrewAvtar from "./CastCrewAvtar";
import ReviewComponent from "./ReviewComponent";
import Loading from "../Loading/Loading";

import { GET_DETAILS, GET_CREDIT, GET_REVIEW } from "../../graphql/queries.tsx";
import CompanyProduction from "./CompanyProduction.tsx";

const DetailPage = () => {
  const { id } = useParams();
  const mediaType = localStorage.getItem("media_type") || "movie";

  // Queries
  const numericId = Number(id);
  const { loading: reviewLoading, data: reviewData } = useQuery(GET_REVIEW, {
    variables: { id: numericId, type: mediaType },
  });
  const { loading: detailLoading, data: detailData } = useQuery(GET_DETAILS, {
    variables: { id: numericId, type: mediaType },
  });

  const { loading: creditLoading, data: creditData } = useQuery(GET_CREDIT, {
    variables: { id: numericId, type: mediaType },
  });

  const data = detailData?.getDetails;
  const castCrew = creditData?.getCredit;
  const reviews = reviewData?.getReviews;
  console.log(reviews, "hello");

  return (
    <Fragment>
      {reviewLoading || detailLoading || creditLoading ? (
        <Loading />
      ) : (
        <Box>
          {/* Background Section */}
          <Box
            sx={{
              background: data?.backdrop_path
                ? `url(http://image.tmdb.org/t/p/w500${data?.backdrop_path})`
                : "rgba(0, 0, 0, 0.5)",
              backgroundSize: data?.backdrop_path ? "cover" : "contain",
              backgroundPosition: "center",
              height: { xs: "90%", md: "calc(100vh - 30vh)" },
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: data?.backdrop_path
                  ? "rgba(0, 0, 0, 0.5)"
                  : "none",
              }}
            />

            <Container
              sx={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "center", md: "flex-start" },
                justifyContent: "space-between",
                gap: 3,
                paddingY: 4,
              }}
            >
              {/* Movie Poster */}
              <Card
                sx={{
                  width: { xs: "100%", md: "30%" },
                  boxShadow: 3,
                  borderRadius: 2,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {data?.poster_path ? (
                  <CardMedia
                    component="img"
                    image={`http://image.tmdb.org/t/p/w500${data?.poster_path}`}
                    alt={data?.title || "Poster"}
                    sx={{ width: "100%", height: "auto" }}
                  />
                ) : (
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      padding: 2,
                    }}
                  >
                    <MovieCreationOutlined
                      sx={{ fontSize: 48, color: "gray", marginBottom: 1 }}
                    />
                    <Typography variant="body1" color="text.secondary">
                      Poster Not Available
                    </Typography>
                  </CardContent>
                )}
              </Card>

              {/* Movie Details */}
              <Box
                sx={{
                  flex: 1,
                  textAlign: { xs: "center", md: "left" },
                  alignSelf: "center",
                }}
              >
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  sx={{ color: "white" }}
                >
                  {data?.title || data?.name || "Title Not Available"}
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: "white" }}
                >
                  {data?.overview || "Overview Not Available"}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: "white" }}
                >
                  Release Date:{" "}
                  {data?.release_date || data?.first_air_date || "N/A"}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: "white" }}
                >
                  Rating:{" "}
                  {data?.vote_average ? `${data?.vote_average} / 10` : "N/A"}
                </Typography>
              </Box>
            </Container>
          </Box>

          {/* Additional Details */}
          <Container
            sx={{
              mt: { xs: "1rem", md: "3rem" },
              maxWidth: "1500px !important",
              mb: 3,
            }}
          >
            <CompanyProduction data={data} />
            <Divider
              sx={{
                borderBottomWidth: "thin",
                color: "#e1d6d6",
                borderColor: "rgb(255 255 255 / 87%)",
              }}
            />
            <CastCrewAvtar cast={castCrew?.cast} title={"Cast"} />
            <Divider
              sx={{
                borderBottomWidth: "thin",
                color: "#e1d6d6",
                borderColor: "rgb(255 255 255 / 87%)",
              }}
            />
            <CastCrewAvtar cast={castCrew?.crew} title={"Crew"} />
          </Container>
          <Divider
            sx={{
              borderBottomWidth: "thin",
              color: "#e1d6d6",
              borderColor: "rgb(255 255 255 / 87%)",
            }}
          />
          <RecomSimilar />
          <Box sx={{ backgroundColor: "#3c3c3c" }}>
            <ReviewComponent reviews={reviews} />
          </Box>
        </Box>
      )}
    </Fragment>
  );
};

export default DetailPage;
