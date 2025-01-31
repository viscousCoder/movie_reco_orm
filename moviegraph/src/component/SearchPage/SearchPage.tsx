import { Container, Typography } from "@mui/material";
import React from "react";
import DataList from "../DataList/DataList.tsx";
import { useLocation } from "react-router-dom";
import { GET_SEARCH_BAR_DATA } from "../../graphql/queries.tsx";
import { useQuery } from "@apollo/client";

/**
 *
 * @returns search bar result
 */
const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const { loading, data: searchData } = useQuery(GET_SEARCH_BAR_DATA, {
    variables: { query: query },
  });
  const data = searchData?.getSearchData;
  return (
    <Container>
      <Typography variant="h2">Results</Typography>
      <DataList data={data} />
    </Container>
  );
};

export default SearchPage;
