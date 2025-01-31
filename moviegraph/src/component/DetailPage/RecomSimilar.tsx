import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Container, Tab, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataList from "../DataList/DataList.tsx";
import {
  GET_RECOMMENDED_MOVIE,
  GET_RECOMMENDED_TV,
  GET_SIMILAR_MOVIE,
  GET_SIMILAR_TV,
} from "../../graphql/queries.tsx";
import { useLazyQuery } from "@apollo/client";
import Loading from "../Loading/Loading.tsx";

/**
 * @returns similar and recommended movie as per the user request
 */
const RecomSimilar = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const mediaType = localStorage.getItem("media_type");
  const isMovie = mediaType === "movie";

  const [tabValue, setTabValue] = useState("recommend");
  const [currentData, setCurrentData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [fetchRecommend, { loading: recommendLoading }] = useLazyQuery(
    isMovie ? GET_RECOMMENDED_MOVIE : GET_RECOMMENDED_TV,
    {
      onCompleted: (data) => {
        const results =
          data?.[isMovie ? "getRecommendedMovie" : "getRecommendedTv"] || [];
        setCurrentData(results);
        setLoading(false);
      },
    }
  );

  const [fetchSimilar, { loading: similarLoading }] = useLazyQuery(
    isMovie ? GET_SIMILAR_MOVIE : GET_SIMILAR_TV,
    {
      onCompleted: (data) => {
        const results =
          data?.[isMovie ? "getSimilarMovie" : "getSimilarTv"] || [];
        setCurrentData(results);
        setLoading(false);
      },
    }
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
    setLoading(true);

    if (newValue === "recommend") {
      fetchRecommend({ variables: { id } });
    } else if (newValue === "similar") {
      fetchSimilar({ variables: { id } });
    }
  };

  // Load recommended data by default on initial render
  useEffect(() => {
    fetchRecommend({ variables: { id } });
  }, [id, fetchRecommend]);

  const handleClick = () => {
    navigate("/trending");
  };

  return (
    <>
      {loading || similarLoading || recommendLoading ? (
        <Loading />
      ) : (
        <Container sx={{ maxWidth: "1500px !important" }}>
          <Box sx={{ width: "100%", typography: "body1", color: "white" }}>
            <TabContext value={tabValue}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  sx={{ color: "white" }}
                >
                  <Tab
                    label="Recommended"
                    value="recommend"
                    sx={{ color: "white !important" }}
                  />
                  <Tab
                    label="Similar"
                    value="similar"
                    sx={{ color: "white !important" }}
                  />
                </TabList>
                <Typography variant="body2" onClick={handleClick}>
                  See all
                </Typography>
              </Box>
              <TabPanel value="recommend"></TabPanel>
              <TabPanel value="similar"></TabPanel>
            </TabContext>
          </Box>
          <Box sx={{ height: "100%", overflow: "hidden" }}>
            <DataList data={currentData} />
          </Box>
        </Container>
      )}
    </>
  );
};

export default RecomSimilar;
