import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import Calendar from "react-calendar";

import cheeseCake1 from "../images/productImages/cheeseCake1.jpeg";

const ProductDetailsPage = () => {
  const [deliveryDate, onChange] = useState(new Date());

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: "3rem", mb: "3rem" }}>
        <Box sx={{ width: "200px", mt: "1rem" }}>
          <Calendar
            sx={{ fontsize: "12px" }}
            onChange={onChange}
            value={deliveryDate}
          />
        </Box>
      </Container>
    </>
  );
};

export default ProductDetailsPage;
