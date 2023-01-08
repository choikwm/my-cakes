import React from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import aboutUsPhoto1 from "../images/aboutUsPageImages/aboutUsPhoto1.jpeg";

const AboutUsPage = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          my: "2rem",
        }}
      >
        <img src={aboutUsPhoto1} width="500px" height="350px" alt="" />

        {/* BOX IN FULL VIEW */}
        <Box
          sx={{
            flexDirection: "column",
            mt: { xs: "1rem", md: 0 },
            ml: { xs: 0, md: "2rem" },
            maxWidth: "500px",
          }}
        >
          <Typography
            sx={{
              color: "#87c4d6",
              fontSize: "40px",
              mb: "2rem",
            }}
          >
            Our story
          </Typography>

          <Typography
            align="justify"
            sx={{
              color: "#948487",
              fontWeight: 300,
              fontSize: "14px",
              mb: "1rem",
            }}
          >
            Grand opening in 2022!<br></br>
            <br></br>
            We are passionate about creating the best tasting cakes and
            desserts, serving only the freshest food for our customers.
            <br></br>
            <br></br>
            As our ovens warm up, we mix only the highest quality ingredients
            into our cakes and we begin the process of crafting each individual
            item. Our dedicated and determined team of pastry chefs make all the
            cakes by hand.
            <br></br>
            <br></br>
            “Always fresh” is a tradition we adhere to. we bake fresh everyday,
            all day.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default AboutUsPage;
