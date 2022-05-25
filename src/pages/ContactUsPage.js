import React, { useEffect, useState, useMemo } from "react";

import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import ImportGoogleMap from "../components/ImportGoogleMap";
import isWeekend from "date-fns/isWeekend";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const ContactUsPage = () => {
  const [value, setValue] = useState(new Date());

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
          // height: "100vh",
          mt: "1rem",
          mb: "2rem",
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
          Come visit us
        </Typography>

        <Typography
          variant="h9"
          sx={{ ml: "1rem", mb: "1rem", fontSize: "14px" }}
        >
          Monday to Friday: 9am - 10:00pm
          <br></br>
          Saturday, Sunday and Public Holidays: 10:30am - 10:00pm
        </Typography>

        <Container
          maxWidth="sx"
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImportGoogleMap />
        </Container>

        <Typography
          sx={{
            color: "#bd9191",
            fontSize: "30px",
            ml: "1rem",
            mt: "2rem",
            mb: "1.5rem",
          }}
        >
          We would love to hear from you
        </Typography>
        <Typography
          variant="h9"
          align="justify"
          sx={{ ml: "1rem", mb: "1rem", fontSize: "14px" }}
        >
          If you'd like to order, if you have any question about our products or
          if you want to partner with us the best is to drop up a message on
          WhatsApp at +852 8888 8888. Of course if you like to fill in forms
          you're welcome to use the below
        </Typography>

        <Typography
          sx={{
            color: "#bd9191",
            fontSize: "30px",
            ml: "1rem",
            mt: "2rem",
            mb: "0.5rem",
          }}
        >
          Interested in corporate together?
        </Typography>

        <Typography
          variant="h9"
          sx={{ ml: "1rem", mt: "1rem", mb: "1rem", fontSize: "14px" }}
        >
          Let's make an appointment below to have a talk!
        </Typography>

        {/* <Container autowidth> */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            // sx={{ width: 100 }}
            minDate={new Date()}
            orientation="portrait"
            // sx={{ display: { xs: "portrait", md: "landscape" } }}
            openTo="day"
            value={value}
            shouldDisableDate={isWeekend}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        {/* </Container> */}

        {/* <Container
          maxWidth="lg"
          sx={{
            mb: "3rem",
          }}
        >
          {/* <Box sx={{ width: "200px", mt: "1rem" }}>
            {/* <Calendar
              sx={{ fontsize: "12px" }}
              onChange={onChange}
              value={deliveryDate}
            /> */}
        {/* </Box> */}
        {/* </Container> */}
      </Container>
    </>
  );
};

export default ContactUsPage;
