import React from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";

const PromotionPage = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        mt: "1rem",
      }}
    >
      <Typography
        sx={{
          color: "#b07282",
          fontSize: "40px",
          ml: "1rem",
          mt: "1rem",
          mb: "1.5rem",
        }}
      >
        Latest Promotions
      </Typography>
    </Container>
  );
};

export default PromotionPage;
