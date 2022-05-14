import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { common } from "@mui/material/colors";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import visaCard from "../images/creditCardsImages/visaCard.png";
import masterCard from "../images/creditCardsImages/masterCard.png";
import aeCard from "../images/creditCardsImages/aeCard.png";

// // import AppBar from "@mui/material/AppBar";
// // import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// // import { styled, alpha } from "@mui/material/styles";
// import SearchIcon from "@mui/icons-material/Search";
// import InputBase from "@mui/material/InputBase";

const FooterBar = () => {
  const [emailNewsLetter, setEmailNewsLetter] = useState("");
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#a35b62",
          height: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Container>
          <Typography
            style={{ color: "#f5f2f3" }}
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
            style={{ color: "#cfcacc" }}
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
            fullWidth
            style={{ color: "#cfcacc" }}
            inputProps={{ style: { fontSize: 12 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 12 } }} // font size of input label
            value={emailNewsLetter}
            placeholder="Enter your email address here"
            onChange={(event) => {
              setEmailNewsLetter(event.target.value);
            }}
            size="small"
            sx={{ mb: "1rem", ml: "1rem", mr: "1rem" }}
          />

          <Button
            size="small"
            // style={{ color: "#9e8a6f" }}
            sx={{ mb: "2rem", ml: "1rem", mr: "1rem", color: common.white }}
            // onClick={checkEmptyLogin}
          >
            Subscribe
          </Button>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: "#b08994",
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
            <FacebookIcon sx={{ mr: "1rem" }}></FacebookIcon>
            <InstagramIcon />
          </Typography>
        </Container>
      </Box>

      <Box sx={{ height: 100, backgroundColor: "#d9bac2" }}>
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
              style={{ color: "#857176" }}
              sx={{
                fontSize: "12px",
                mt: "1rem",
                mb: "1rem",
                ml: "1rem",
                mr: "1rem",
              }}
            >
              Copyright © 2022 myCAKES HONG KONG ONLINE SHOP
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FooterBar;
