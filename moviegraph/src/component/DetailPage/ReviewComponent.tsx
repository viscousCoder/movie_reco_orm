import React from "react";
import { Card, CardContent, Avatar, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import FeedbackIcon from "@mui/icons-material/Feedback";

type Review = {
  author: string;
  author_details: {
    avatar_path: string | null;
    rating: number | null;
  };
  content: string;
  created_at: string;
};

interface ReviewProps {
  reviews: Review[];
}

/**
 * @params array of reviews
 * @returns other user reviews
 */

const ReviewComponent: React.FC<ReviewProps> = ({ reviews }) => {
  console.log(reviews, "hello");
  return (
    <Box
      sx={{
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "#3c3c3c",
      }}
    >
      {reviews?.length > 0 ? (
        reviews?.map((review, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: "16px",
              backgroundColor: "#7b7b7b",
              color: "white",
            }}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar
                src={
                  review?.author_details.avatar_path
                    ? `https://image.tmdb.org/t/p/w200${review?.author_details?.avatar_path}`
                    : undefined
                }
                alt={review?.author}
                sx={{
                  width: 56,
                  height: 56,
                  backgroundColor: "#e0e0e0",
                }}
              >
                {!review?.author_details?.avatar_path && <PersonIcon />}
              </Avatar>
              <Box>
                <Typography variant="h6">{review?.author}</Typography>
                {review?.author_details?.rating !== null && (
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <StarIcon sx={{ color: "#FFD700" }} />
                    <Typography variant="body2">
                      {review?.author_details.rating}/10
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
            <CardContent sx={{ color: "white" }}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                {review?.content}
              </Typography>
            </CardContent>
            <Typography
              variant="caption"
              color="text.secondary"
              textAlign="right"
              sx={{ fontWeight: "700" }}
            >
              {new Date(review?.created_at).toLocaleDateString()}
            </Typography>
          </Card>
        ))
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px",
            border: "1px dashed #ddd",
            borderRadius: "8px",
          }}
        >
          <FeedbackIcon sx={{ fontSize: 50, color: "#bbb" }} />
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ marginTop: "16px" }}
          >
            No reviews available.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ReviewComponent;
