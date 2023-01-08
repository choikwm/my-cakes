import React from "react";
import Carousel from "nuka-carousel";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import coverPhoto from "../images/homePageImages/coverPhoto.jpeg";
import coverPhoto2 from "../images/homePageImages/coverPhoto2.jpeg";
import coverPhoto3 from "../images/homePageImages/coverPhoto3.jpeg";
import background1 from "../images/backgroundImages/background1.jpeg";
import deliveryImage from "../images/homePageImages/deliveryImage.svg";
import ecoImage from "../images/homePageImages/ecoImage.svg";
import fallInLoveImage from "../images/homePageImages/fallInLoveImage.svg";

const images = [coverPhoto, coverPhoto2, coverPhoto3];

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff6f2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Carousel
          autoplay
          wrapAround
          slidesToShow={1}
          defaultControlsConfig={{
            nextButtonStyle: {
              display: "none",
            },
            prevButtonStyle: {
              display: "none",
            },
          }}
          style={{
            maxWidth: "700px",
            width: "100%",
          }}
        >
          {images.map((image) => (
            <img src={image} alt="" style={{ width: "100%" }} />
          ))}
        </Carousel>
      </Box>

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
        <Typography
          style={{ color: "#edb29f", fontWeight: 300 }}
          sx={{ fontSize: "45px", mt: "1rem" }}
        >
          Fall in love at first bite
        </Typography>

        <Typography
          style={{ color: "#a7c3cf", fontWeight: 300 }}
          sx={{ fontSize: "18px", mt: "1rem", mb: "0.5rem" }}
        >
          We believe in the art of homemade baked goods
        </Typography>

        <img src={fallInLoveImage} width="300px" height="300px" alt="" />

        <Typography
          style={{ color: "#a6a2a1", fontWeight: 300 }}
          align="justify"
          sx={{
            fontSize: "14px",
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

        <Container maxWidth="lg" sx={{ mb: "5rem" }}>
          <img src={background1} alt="Background" width="100%" height="100%" />
        </Container>
        {/* </Box> */}
      </Container>

      <Box
        sx={{
          backgroundColor: "#faf7f5",
          height: 500,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          style={{ color: "#87c4d6", fontWeight: 300 }}
          sx={{
            ml: "2rem",
            mr: "2rem",
            mt: "2rem",
            mb: "1rem",
            fontSize: "40px",
          }}
        >
          Same day delivery
        </Typography>

        <Typography
          style={{ color: "#edb29f", fontWeight: 300 }}
          sx={{
            fontSize: "17px",
          }}
        >
          for orders placed before 11am Monday to Saturday
        </Typography>

        <br></br>
        <br></br>
        <img src={deliveryImage} width="300px" height="300px" alt="" />
        <br></br>
        <br></br>
        <br></br>
      </Box>

      <Box
        sx={{
          backgroundColor: "#edb29f",
          height: 500,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          style={{ color: "#FFFFFF", fontWeight: 300 }}
          sx={{
            ml: "2rem",
            mr: "2rem",
            mt: "4rem",
            mb: "1rem",
            fontSize: "40px",
          }}
        >
          Vegen-friendly Cakes
        </Typography>

        <Typography
          style={{ color: "#FFFFFF", fontWeight: 300 }}
          sx={{
            fontSize: "17px",
          }}
        >
          Delicious but planet-friendly
        </Typography>

        <br></br>
        <br></br>
        <img src={ecoImage} width="300px" height="300px" alt="" />
        <br></br>
        <br></br>
        <br></br>
      </Box>
    </>
  );
};
export default HomePage;
