import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { Box, Container, Tab, Typography } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Loading from "./Loading/Loading";
import DataList from "./DataList/DataList";
import { useNavigate } from "react-router-dom";
import {
  GET_ALL_TRENDING,
  GET_TRENDING_MOVIES,
  GET_TRENDING_TV,
} from "../graphql/queries";

// GraphQL queries

const HomeComponent = () => {
  const [value, setValue] = React.useState("all");
  const navigate = useNavigate();

  // Fetch data based on tab selection
  const { data: allTrendingData, loading: allLoading } = useQuery(
    GET_ALL_TRENDING,
    {
      skip: value !== "all",
    }
  );
  const { data: moviesData, loading: moviesLoading } = useQuery(
    GET_TRENDING_MOVIES,
    {
      skip: value !== "movie",
    }
  );
  const { data: tvData, loading: tvLoading } = useQuery(GET_TRENDING_TV, {
    skip: value !== "tv",
  });

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // Get the appropriate data based on the selected tab
  let trendingItems = [];
  if (value === "all" && allTrendingData) {
    trendingItems = allTrendingData.getAllTrending;
  } else if (value === "movie" && moviesData) {
    trendingItems = moviesData.getMovie;
  } else if (value === "tv" && tvData) {
    trendingItems = tvData.getTv;
  }

  // console.log(trendingItems);
  const handleClick = () => {
    navigate("/trending");
  };

  return (
    <Fragment>
      {allLoading || moviesLoading || tvLoading ? (
        <Loading />
      ) : (
        <Container
          sx={{ maxWidth: "1500px !important", mt: { xs: 3, md: 10 } }}
        >
          <Typography variant="h4" sx={{ fontWeight: "900" }}>
            Trending
          </Typography>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",

                  borderBottomWidth: "thin",
                  color: "#e1d6d6",
                }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="All" value="all" sx={{ color: "#fff" }} />
                  <Tab label="Movie" value="movie" sx={{ color: "#fff" }} />

                  <Tab label="TV" value="tv" sx={{ color: "#fff" }} />
                </TabList>
                <Typography
                  variant="body2"
                  onClick={handleClick}
                  sx={{ cursor: "pointer" }}
                >
                  See all
                </Typography>
              </Box>
              <TabPanel value="all"></TabPanel>
              <TabPanel value="movie"></TabPanel>
              <TabPanel value="tv"></TabPanel>
            </TabContext>
          </Box>
          <Box sx={{ height: "100%", overflow: "hidden", minHeight: "70%" }}>
            {/* <TrendingMovie /> */}
            <DataList data={trendingItems} />
          </Box>
        </Container>
      )}
    </Fragment>
  );
};

export default HomeComponent;
