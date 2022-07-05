import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import coverPhoto from "../images/homePageImages/coverPhoto.jpeg";
import { Typography } from "@mui/material";

const FullPageScoll = () => {
  const SectionStyle = {
    height: "100vh",
    weight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection
          style={{ ...SectionStyle, backgroundImage: `url(${coverPhoto})` }}
        >
          <Typography
            style={{ color: "#ffffff", fontWeight: 300 }}
            sx={{ fontSize: "45px", mt: "3rem", mb: "0.5rem" }}
          >
            Fall in love at first bite
          </Typography>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageScoll;
