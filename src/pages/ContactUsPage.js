import React, { useEffect, useState } from "react";

import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Calendar from "react-calendar";

const ContactUsPage = () => {
  const [deliveryDate, onChange] = useState(new Date());
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          mt: "2rem",
        }}
      >
        <Typography
          sx={{
            color: "#bd9191",
            fontSize: "30px",
            ml: "1rem",
            mt: "0.6rem",
            mb: "1.5rem",
          }}
        >
          We would love to hear from you
        </Typography>

        <Typography
          variant="h9"
          sx={{ ml: "1rem", mb: "1rem", fontSize: "14px" }}
        >
          If you'd like to order, if you have any question about our products or
          if you want to partner with us the best is to drop up a message on
          WhatsApp at +852 8888 8888. Of course if you like to fill in forms
          you're welcome to use the below ;){" "}
        </Typography>

        <Typography
          sx={{
            color: "#bd9191",
            fontSize: "18px",
            ml: "1rem",
            mt: "2rem",
          }}
        >
          Interested in corporate together? Let's make an appointment below to
          have a talk!
        </Typography>

        <Container
          maxWidth="lg"
          sx={{
            mb: "3rem",
          }}
        >
          <Box sx={{ width: "200px", mt: "1rem" }}>
            <Calendar
              sx={{ fontsize: "12px" }}
              onChange={onChange}
              value={deliveryDate}
            />
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default ContactUsPage;
