import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Header from "./Header/Header.tsx";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Footer.tsx";

/**
 * to set the structure
 * first header
 * content
 * footer
 */
const RootFile = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box sx={{ backgroundColor: "#3c3c3c", minHeight: "100vh", color: "#fff" }}>
      <Header />
      <Box
        sx={{
          height: { xs: "calc(100px - 44px)", md: "calc(100px - 36px)" },
        }}
      ></Box>
      <Box sx={{ minHeight: "50rem" }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default RootFile;
