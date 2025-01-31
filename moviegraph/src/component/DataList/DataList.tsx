import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

/**
 * @component To show list of all movies tv shows in the form of cards
 * @param {Array} data - list of movies and tv shows
 * @returns list of all movies or shows in card format
 */
export interface AllTrending {
  backdrop_path: string | null;
  first_air_date: string | null;
  id: string;
  media_type: "movie" | "tv" | string;
  name: string | null;
  popularity: string;
  poster_path: string;
  profile_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  __typename: "AllTrending";
}

// const DataList = ({ data }) => {
export interface DataListProps {
  data: AllTrending[];
}

const DataList: React.FC<DataListProps> = ({ data }) => {
  const naviagte = useNavigate();

  /**
   * @function getMediaPath - getting the user mediaPath
   * @param {string} userId - taking userId as a parameter
   * @returns {userMediaPath} -  user mediaPath based on userId
   */
  const handleShow = (item: AllTrending) => {
    localStorage.setItem("media_type", item.media_type || "movie");
    naviagte(`/${item!.id}`);
  };

  /**
   *
   * @param item took item(movie or show) details
   * @used to set the media_type and naviagte
   * @returns naviagte the user to the details page
   */
  const handlePeople = (item: AllTrending) => {
    console.log("hii");
    naviagte(`/people/${item}`);
  };

  const noneImage = "/A9Roojb8irRKPyyhDKCRzVc16NI.jpg";

  return (
    <Container sx={{ maxWidth: "1500px !important" }}>
      <Grid2
        // container
        spacing={2}
        display={"flex"}
        justifyContent={"center"}
        marginBottom={3}
      >
        {data?.length <= 0 && (
          <Box
            sx={{
              height: "40rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>No data found</h1>
          </Box>
        )}
        {data?.map((item) => (
          <Grid2
            key={item.id}
            size={{ xs: 12, sm: 6, md: 4 }}
            onClick={
              item.id ? () => handleShow(item) : () => handlePeople(item)
            }
            component="div"
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ height: "22rem", width: "21.11rem" }}
                  image={`http://image.tmdb.org/t/p/w500${
                    item.backdrop_path || item.profile_path || noneImage
                  }`}
                  alt={item.title || item.name || "One image"}
                />
              </CardActionArea>
              <CardActions sx={{ background: "black" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <Stack
                    direction={"column"}
                    justifyContent={"left !important"}
                  >
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
                        {(item.title ?? item.name ?? "Unknown")?.length > 25
                          ? (item.title ?? item.name)?.slice(0, 20) + "..."
                          : item.title ?? item.name ?? "Unknown"}
                        {/* {(item.title || item.name||).length > 25
                          ? (item.title || item.name).slice(0, 20)
                          : item.title || item.name} */}
                      </Typography>
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
                        Release Date <span> </span>
                        {item.release_date || item.first_air_date}
                      </Typography>
                    </Button>
                  </Stack>
                  <Avatar
                    sx={{
                      backgroundColor:
                        item?.vote_average && item.vote_average > 6
                          ? "green"
                          : item.vote_average
                          ? "orange"
                          : "red",
                    }}
                  >
                    {item?.vote_average?.toFixed(1)}
                  </Avatar>
                </Box>
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default DataList;
