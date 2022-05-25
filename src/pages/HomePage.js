import React from "react";

import coverPhoto from "../images/homePageImages/coverPhoto.jpeg";
import coverPhoto2 from "../images/homePageImages/coverPhoto2.jpeg";
import coverPhoto3 from "../images/homePageImages/coverPhoto3.jpeg";
import coverPhoto4 from "../images/homePageImages/coverPhoto4.jpeg";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import Carousel from "nuka-carousel";

import background1 from "../images/backgroundImages/background1.jpeg";

const images = [coverPhoto, coverPhoto2, coverPhoto3, coverPhoto4];

const HomePage = () => {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: "1.5rem",
        }}
      >
        <Carousel
          autoplay
          wrapAround
          slidesToShow={1}
          style={{
            maxWidth: "700px",
            width: "100%",
            height: "400px",
            // height: "100%",
            // display: "flex",
            // justifyContent: "center",
            // textAlign: "center",
          }}
        >
          {images.map((image) => (
            <img src={image} alt="" style={{ width: "100%" }} />
          ))}
        </Carousel>

        <Typography
          style={{ color: "#b3707c", fontWeight: 300 }}
          sx={{ fontSize: "45px", mt: "3rem", mb: "0.5rem" }}
        >
          Fall in love at first bite
        </Typography>

        <Typography
          style={{ color: "#856d73", fontWeight: 300 }}
          align="justify"
          sx={{
            fontSize: "14px",
            mt: "1rem",
            mb: "2rem",
            mr: "0.5rem",
            ml: "0.5rem",
          }}
        >
          We believe in the art of homemade baked goods. That’s why we always
          use handcraft each pastry with high quality, natural, and
          locally-sourced ingredients. Specialising in cakes, we’re a home
          bakery catering to all occasions throughout Hong Kong.
        </Typography>

        <Container maxWidth="lg">
          <img src={background1} width="100%" height="100%" />
        </Container>
      </Container>
    </>
  );
};

export default HomePage;
