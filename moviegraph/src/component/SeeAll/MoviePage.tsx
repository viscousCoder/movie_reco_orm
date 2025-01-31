import React from "react";
import { Box, Grid, Typography, Button, Divider } from "@mui/material";
import Filters from "./Filters.tsx";
import MovieCard from "./MovieCard.tsx";
import { useQuery } from "@apollo/client";
import { GET_ALL_TRENDING } from "../../graphql/queries.tsx";

/**
 *
 * @returns show the movies list and filter
 */
const MoviesPage: React.FC = () => {
  const { data: movie, loading: allLoading } = useQuery(GET_ALL_TRENDING);
  const movies = movie?.getAllTrending;
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      p={3}
      bgcolor="#3c3c3c"
    >
      {/* Filters Section */}
      <Box
        flex={{ xs: "1", md: "0 0 35%" }}
        pr={{ md: 3 }}
        mb={{ xs: 3, md: 0 }}
      >
        <Filters />
      </Box>

      <Box flex="1">
        <Typography variant="h4" gutterBottom>
          Movies In Delhi-NCR
        </Typography>

        <Box
          display="flex"
          flexWrap="wrap"
          gap={1}
          mb={3}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          {[
            "Hindi",
            "English",
            "English 7D",
            "Malayalam",
            "Telugu",
            "Bengali",
            "Japanese",
            "Jonsari",
            "Tamil",
          ]?.map((tag) => (
            <Button
              variant="outlined"
              sx={{
                borderColor: "#cecece",
                color: "#cecece",
                "&:hover": {
                  borderColor: "#cecece",
                  backgroundColor: "#ffffff33", // Light transparent #cecece
                },
              }}
              key={tag}
            >
              {tag}
            </Button>
          ))}
        </Box>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2}>
          {movies?.map((movie) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={movie.id}
              // onClick={(movie) => handleClick(movie)}
            >
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MoviesPage;
