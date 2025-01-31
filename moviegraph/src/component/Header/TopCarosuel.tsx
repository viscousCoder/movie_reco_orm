import React from "react";
import Slider from "react-slick";
import { Box, IconButton } from "@mui/material";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      right: "  10px",
      transform: "translateY(-50%)",
      zIndex: 1,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      "&:hover": { backgroundColor: "rgba(255, 255, 255, 1)" },
    }}
  >
    <ArrowForwardIos fontSize="small" />
  </IconButton>
);

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: "10px",
      transform: "translateY(-50%)",
      zIndex: 1,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      "&:hover": { backgroundColor: "rgba(255, 255, 255, 1)" },
    }}
  >
    <ArrowBackIos fontSize="small" />
  </IconButton>
);

/**
 *
 * @returns slider of top scroller
 */
const TopCarousel = () => {
  const carouselItems = [
    {
      image:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg",
    },
    {
      image:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1735801282046_movieweb1.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "100px",
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        {carouselItems?.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              outline: "none",
              padding: { xs: 0, md: "0 10px" },
            }}
          >
            <img
              src={item.image}
              alt={`Slide ${index}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TopCarousel;
