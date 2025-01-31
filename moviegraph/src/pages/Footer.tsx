import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";

/**footerx */
const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", py: 4 }}>
      <Grid container spacing={4} justifyContent="center" sx={{ p: 2 }}>
        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              borderBottom: "2px solid #d32f2f",
              pb: 1,
            }}
          >
            Popular Categories
          </Typography>
          {["Standup", "Action", "Thriller", "Science", "Horror"]?.map(
            (item) => (
              <Typography key={item} variant="body2">
                <Link href="#" color="inherit" underline="hover">
                  {item}
                </Link>
              </Typography>
            )
          )}
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              borderBottom: "2px solid #d32f2f",
              pb: 1,
            }}
          >
            Platform
          </Typography>
          {["BookmyShow ", "Netflix", "Amazon", "Hotstar", "Viki"]?.map(
            (item) => (
              <Typography key={item} variant="body2">
                <Link href="#" color="inherit" underline="hover">
                  {item}
                </Link>
              </Typography>
            )
          )}
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              borderBottom: "2px solid #d32f2f",
              pb: 1,
            }}
          >
            Our Company
          </Typography>
          {[
            "Recommneded",
            "Legal Notice",
            "Terms And Conditions",
            "About Us",
            "Secure Payment",
          ]?.map((item) => (
            <Typography key={item} variant="body2">
              <Link href="#" color="inherit" underline="hover">
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              borderBottom: "2px solid #d32f2f",
              pb: 1,
            }}
          >
            Services
          </Typography>
          {[
            "Prices Drop",
            "New Products",
            "Best Sales",
            "Contact Us",
            "Sitemap",
          ]?.map((item) => (
            <Typography key={item} variant="body2">
              <Link href="#" color="inherit" underline="hover">
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              borderBottom: "2px solid #d32f2f",
              pb: 1,
            }}
          >
            Contact
          </Typography>
          <Typography variant="body2">
            B-23, Block B, Sector 1, Noida, Uttar Pradesh 201301,India
          </Typography>
          <Typography variant="body2">Phone: 0120 430 5900</Typography>
          <Typography variant="body2">Email: info@celestialsys.com</Typography>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Box
          component="img"
          src="https://www.debik.in/cdn/shop/files/Screenshot_2024-05-11_180707.png?v=1715431048&width=360"
          alt="Payment Methods"
          sx={{ maxWidth: "100%", mb: 2 }}
        />
        <Typography variant="body2">
          Copyright © Celistail System All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
