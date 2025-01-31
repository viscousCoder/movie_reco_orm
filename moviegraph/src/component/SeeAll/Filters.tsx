import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

/**
 *
 * @returns shows filters
 */
const Filters: React.FC = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpansion = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Box sx={{ background: "#3c3c3c" }}>
      {/* Languages */}
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        sx={{ background: "#232020" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#cecece" }} />}
          id="languages-header"
        >
          <Typography sx={{ color: "#cecece" }}>Languages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            display="flex"
            flexWrap="wrap"
            gap={1}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            {[
              "Hindi",
              "English",
              "English 7D",
              "Malayalam",
              "Telugu",
              "Bengali",
              "Japanese",
              "Jonsari",
              "Tamil",
            ]?.map((lang) => (
              <Button
                key={lang}
                variant="outlined"
                sx={{
                  borderColor: "#cecece",
                  color: "#cecece",
                  "&:hover": {
                    borderColor: "#cecece",
                    backgroundColor: "#ffffff33",
                  },
                }}
              >
                {lang}
              </Button>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Genres */}
      <Accordion sx={{ background: "#232020" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#cecece" }} />}
          id="genres-header"
        >
          <Typography sx={{ color: "#cecece" }}>Genres</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {[
              "Action",
              "Adventure",
              "Comedy",
              "Drama",
              "Horror",
              "Science",
              "Mystery",
              "Thriller",
              "Musicals",
            ]?.map((genre) => (
              <Button
                key={genre}
                variant="outlined"
                size="small"
                sx={{
                  borderColor: "#cecece",
                  color: "#cecece",
                  "&:hover": {
                    borderColor: "#cecece",
                    backgroundColor: "#ffffff33",
                  },
                }}
              >
                {genre}
              </Button>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Format */}
      <Accordion sx={{ background: "#232020" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#cecece" }} />}
          id="format-header"
        >
          <Typography sx={{ color: "#cecece" }}>Format</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {[
              "2D",
              "3D",
              "4DX",
              "7D",
              "IMAX 2D",
              "4DX 3D",
              "IMAX 3D",
              "ICE",
              "ICE 3D",
            ]?.map((format) => (
              <Button
                key={format}
                variant="outlined"
                sx={{
                  borderColor: "#cecece",
                  color: "#cecece",
                  "&:hover": {
                    borderColor: "#cecece",
                    backgroundColor: "#ffffff33",
                  },
                }}
              >
                {format}
              </Button>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Browse by Cinemas */}
      <Button
        variant="outlined"
        fullWidth
        sx={{
          mt: 2,
          borderColor: "#cecece",
          color: "#cecece",
          "&:hover": {
            borderColor: "#cecece",
            backgroundColor: "#ffffff33",
          },
        }}
      >
        Browse by Cinemas
      </Button>
    </Box>
  );
};

export default Filters;
