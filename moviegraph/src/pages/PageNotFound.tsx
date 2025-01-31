import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        backgroundColor: "3c3c3c",
        padding: 2,
      }}
    >
      <ErrorOutline
        sx={{
          fontSize: { xs: 80, sm: 120 },
          color: "error.main",
          marginBottom: 2,
        }}
      />
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", sm: "2.5rem" },
          marginBottom: 2,
        }}
      >
        Page Not Found
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "0.9rem", sm: "1rem" },
          marginBottom: 3,
        }}
      >
        Oops! The page you’re looking for doesn’t exist.
      </Typography>
      <Button
        variant="contained"
        // color="primary"
        onClick={handleGoHome}
        sx={{
          textTransform: "none",
          fontSize: { xs: "0.8rem", sm: "1rem" },
          background: "#887979",
        }}
      >
        Go to Homepage
      </Button>
    </Box>
  );
};

export default PageNotFound;
