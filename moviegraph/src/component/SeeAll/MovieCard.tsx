import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  likes: string;
  promoted: boolean;
  rating: string;
  poster: string;
}

interface MovieCardProps {
  movie: Movie;
}

/**
 *
 * @param param0 movie details
 * @returns return the card of the movie
 */
const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();

  const handleNavigate = (movie) => {
    localStorage.setItem("media_type", movie.media_type);
    navigate(`/${movie.id}`);
  };
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={() => handleNavigate(movie)}
    >
      <CardMedia
        component="img"
        height="250"
        image={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      {/* <Box p={2} flexGrow={1} sx={{ background: "black", color: "white" }}>
        <Typography variant="subtitle1">{movie.title}</Typography>
        
        <Typography variant="body2" color="success.main">
        {movie?.popularity}
        </Typography>
        
        <Typography variant="body2" color="textSecondary">
        {movie?.vote_count}
        </Typography>
        </Box> */}
      <CardActions sx={{ background: "black" }}>
        <Tooltip title={movie.title || movie.name}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Stack direction={"column"} justifyContent={"left !important"}>
              <Button
                size="small"
                color="primary"
                sx={{ justifyContent: "left" }}
              >
                <Typography
                  variant="body2"
                  color="success.main"
                  sx={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {(movie.title ?? movie.name ?? "Unknown")?.length > 10
                    ? (movie.title ?? movie.name)?.slice(0, 10) + "..."
                    : movie.title ?? movie.name ?? "Unknown"}
                  {/* {(item.title || item.name||).length > 25
                          ? (item.title || item.name).slice(0, 20)
                          : item.title || item.name} */}
                </Typography>
                {/* </Tooltip> */}
              </Button>
              <Button size="small" color="primary">
                <Typography
                  variant="body2"
                  color="success.main"
                  sx={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {/* Release Date <span> </span> */}
                  {movie.release_date || movie.first_air_date}
                </Typography>
              </Button>
            </Stack>
            <Avatar
              sx={{
                backgroundColor:
                  movie?.vote_average && movie.vote_average > 6
                    ? "green"
                    : movie.vote_average
                    ? "orange"
                    : "red",
              }}
            >
              {movie?.vote_average?.toFixed(1)}
            </Avatar>
          </Box>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
