import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import visaCard from "../images/creditCardsImages/visaCard.png";
import masterCard from "../images/creditCardsImages/masterCard.png";
import aeCard from "../images/creditCardsImages/aeCard.png";

const FooterBar = () => {
  const [emailNewsLetter, setEmailNewsLetter] = useState("");
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#dce0e3",
          //a35b62
          height: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Container>
          <Typography
            style={{ color: "#5fc2d4" }}
            sx={{
              fontSize: "23px",
              mt: "2rem",
              mb: "1rem",
              ml: "1rem",
              mr: "1rem",
            }}
          >
            Stay Connected
          </Typography>

          <Typography
            style={{ color: "#799094" }}
            sx={{
              fontSize: "12px",
              mt: "0.5rem",
              mb: "1rem",
              ml: "1rem",
              mr: "1rem",
            }}
          >
            Subscribe to receive updates, access to exclusive deals, and more.
          </Typography>

          <TextField
            style={{ color: "#cfcacc" }}
            inputProps={{ style: { fontSize: 12 } }}
            InputLabelProps={{ style: { fontSize: 12 } }}
            value={emailNewsLetter}
            placeholder="Enter your email address here"
            onChange={(event) => {
              setEmailNewsLetter(event.target.value);
            }}
            size="small"
            sx={{ width: "300px", mb: "1rem", ml: "1rem", mr: "1rem" }}
          />
          <br></br>
          <Button
            size="small"
            style={{ color: "#97b5c2" }}
            sx={{ mb: "2rem", ml: "1rem", mr: "1rem" }}
          >
            Subscribe
          </Button>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: "#a5c0cc",
          height: 140,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Container>
          <Typography
            style={{ color: "#f5f2f3" }}
            sx={{
              fontSize: "20px",
              mt: "1rem",
              mb: "1rem",
              ml: "1rem",
              mr: "1rem",
            }}
          >
            Follow us on
          </Typography>

          <Typography
            style={{ color: "#cfcacc" }}
            sx={{
              fontSize: "12px",
              mt: "0.5rem",
              mb: "1rem",
              ml: "1rem",
              mr: "1rem",
            }}
          >
            <FacebookIcon
              style={{ color: "#ffffff" }}
              sx={{ mr: "1rem" }}
            ></FacebookIcon>
            <InstagramIcon
              style={{ color: "#ffffff" }}
              sx={{ mr: "1rem" }}
            ></InstagramIcon>
            <YouTubeIcon style={{ color: "#ffffff" }}> </YouTubeIcon>
          </Typography>
        </Container>
      </Box>

      <Box sx={{ height: 120, backgroundColor: "#e6b8aa" }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignitems: "center",
              mt: "1rem",
            }}
          >
            <img src={visaCard} width="40px" height="40px" alt="" />
            <img src={masterCard} width="40px" height="40px" alt="" />
            <img src={aeCard} width="40px" height="40px" alt="" />
          </Box>

          <></>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignitems: "center",
              mb: "1rem",
            }}
          >
            <Typography
              style={{ color: "#8c8887" }}
              sx={{
                fontSize: "12px",
                mt: "1rem",
                mb: "1rem",
                ml: "1rem",
                mr: "1rem",
              }}
            >
              Copyright © 2022 myCAKES HONG KONG
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FooterBar;
