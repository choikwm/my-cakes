import React, { useState } from "react";
import ImportGoogleMap from "../components/ImportGoogleMap";
import isWeekend from "date-fns/isWeekend";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import meetingImage from "../images/contactUsImages/meeting.svg";
import messageUsImage from "../images/contactUsImages/messageUs.svg";

const ContactUsPage = () => {
  const [value, setValue] = useState(new Date());

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "1rem",
          mb: "2rem",
        }}
      >
        <Typography
          sx={{
            color: "#99bdc4",
            fontSize: "30px",
            ml: "1rem",
            mt: "2rem",
            mb: "1.5rem",
          }}
        >
          Come visit us
        </Typography>

        <Typography
          variant="h9"
          sx={{ ml: "1rem", mb: "1rem", fontSize: "14px" }}
        >
          Monday to Friday: 9am - 9pm
          <br></br>
          Saturday, Sunday and Public Holidays: 10am - 10pm
        </Typography>

        <Container
          maxWidth="sx"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ImportGoogleMap />
        </Container>

        <Typography
          sx={{
            color: "#bd9191",
            fontSize: "30px",
            mt: "4rem",
          }}
        >
          We would love to hear from you
        </Typography>

        <img src={messageUsImage} width="300px" height="300px" alt="" />

        <Typography
          variant="h9"
          align="justify"
          sx={{ mb: "1rem", fontSize: "14px" }}
        >
          If you'd like to order, if you have any question about our products or
          if you want to partner with us the best is to drop up a message on
          WhatsApp at +852 8888 8888. Of course if you like to fill in forms
          you're welcome to use the below
        </Typography>

        <Typography
          sx={{
            color: "#99bdc4",
            fontSize: "30px",

            mt: "4rem",
            mb: "0.5rem",
          }}
        >
          Interested in corporate together?
        </Typography>

        <img src={meetingImage} width="300px" height="300px" alt="" />

        <Typography
          variant="h9"
          sx={{ mt: "1rem", mb: "1rem", fontSize: "14px" }}
        >
          Let's make an appointment below to have a talk!
        </Typography>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            minDate={new Date()}
            orientation="portrait"
            openTo="day"
            value={value}
            shouldDisableDate={isWeekend}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Container>
    </>
  );
};

export default ContactUsPage;
