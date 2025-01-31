import React from "react";
import Slider from "react-slick";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

interface CastSliderProps {
  cast: CastMember[];
  title: string;
}

/**
 * @component to display the cast and crew
 * @param {Array } cast array of cast or crew
 * @param {string} title string which is title either cast or crew
 * @returns a horizontal slider with showing cast and crew
 */
const CastCrewAvtar: React.FC<CastSliderProps> = ({ cast, title }) => {
  console.log(cast);
  /**Custom Next Arrow Components */
  const NextArrow: React.FC<any> = (props) => {
    const { onClick } = props;

    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          right: "5px",
          zIndex: 2,
          transform: "translateY(-50%)",
          backgroundColor: "#65656587",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          "&:hover": { backgroundColor: "lightgray" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    );
  };

  /**Custom Previous Arrow Components */
  const PrevArrow: React.FC<any> = (props) => {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          left: "5px",
          zIndex: 2,
          transform: "translateY(-50%)",
          backgroundColor: "#65656587",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          "&:hover": { backgroundColor: "lightgray" },
        }}
      >
        <ArrowBackIos />
      </IconButton>
    );
  };

  /**react-slick package */
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const profileBaseUrl = "http://image.tmdb.org/t/p/w200";

  return (
    <Box sx={{ padding: "0px", backgroundColor: "#3c3c3c" }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {cast && cast.length > 0 ? (
        cast.length > 1 ? (
          <Slider {...sliderSettings}>
            {cast.map((member) => (
              <Box
                key={member.id}
                sx={{
                  display: "flex !important",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "8px",
                }}
              >
                <Avatar
                  src={
                    member.profile_path
                      ? `${profileBaseUrl}${member.profile_path}`
                      : undefined
                  }
                  alt={member.name}
                  sx={{ width: 140, height: 140, marginBottom: "8px" }}
                >
                  {member.name.charAt(0).toUpperCase()}
                </Avatar>
                <Typography variant="body2" fontWeight="bold">
                  {member.name || "Side Role"}
                </Typography>
                <Typography variant="caption" fontWeight="bold" color="#cbc6c6">
                  {member.character || member.job}
                </Typography>
              </Box>
            ))}
          </Slider>
        ) : (
          cast.map((member) => (
            <Box
              key={member.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "8px",
              }}
            >
              <Avatar
                src={
                  member.profile_path
                    ? `${profileBaseUrl}${member.profile_path}`
                    : undefined
                }
                alt={member.name}
                sx={{ width: 140, height: 140, marginBottom: "8px" }}
              >
                {member.name.charAt(0).toUpperCase()}
              </Avatar>
              <Typography variant="body2" fontWeight="bold">
                {member.name || "Side Role"}
              </Typography>
              <Typography variant="caption" fontWeight="bold" color="#cbc6c6">
                {member.character || member.job}
              </Typography>
            </Box>
          ))
        )
      ) : (
        <Typography
          variant="h5"
          color="#fff"
          sx={{ textAlign: "center", padding: "16px" }}
        >
          No details present
        </Typography>
      )}
    </Box>
  );
};

export default CastCrewAvtar;
