import React, { useState } from "react";
import { Container, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const ProductDetails = () => {
  const location = useLocation();
  const data = location.state;
  const { name, price, image, variant_groups, description } = data;
  const defaultOption = variant_groups[0].options[0];
  const [selectedSize, setSelectedSize] = useState(defaultOption.id);
  const [selectedPrice, setSelectedPrice] = useState(
    defaultOption.price.formatted_with_symbol
  );

  const [defaultQuanity, setDefaultQuanity] = useState(1);

  let productDescription = description.slice(3, description.length - 4);

  let navigate = useNavigate();

  // const functionName = (param, param2, param3) => {
  //   // whatever you want to do
  // };

  const handleQuanityChange = (event) => {
    console.log("event", event);
    setDefaultQuanity(event.target.value);
  };

  const handleSizeChange = (event) => {
    const { value } = event.target;
    setSelectedSize(value);
    const price = variant_groups[0].options.find((item) => item.id === value)
      .price.formatted_with_symbol;
    setSelectedPrice(price);
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: "3rem", mb: "3rem" }}>
        <></>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <img src={image.url} width="300px" height="300px" alt="" />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "left",
              alignItems: "left",
              ml: "2rem",
            }}
          >
            <></>
            <Typography
              sx={{
                color: "#bd9191",
                fontSize: "30px",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="h9"
              sx={{ fontSize: "14px", mt: "0.5rem", mb: "0.5rem" }}
            >
              Price: {selectedPrice}
            </Typography>

            <Stack direction="row">
              <Typography variant="h9" sx={{ fontSize: "14px", mt: "1rem" }}>
                Size:
              </Typography>
              <Select
                value={selectedSize}
                onChange={handleSizeChange}
                // MaxWidth="100px"
                sx={{ maxHeight: 30 }}
              >
                {variant_groups[0].options.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </Stack>

            <Stack direction="row">
              <Typography variant="h9" sx={{ fontSize: "14px", mt: "1rem" }}>
                Quanity:
              </Typography>
              <Select
                value={defaultQuanity}
                onChange={handleQuanityChange}
                width="100px"
                sx={{ minWidth: 200, maxHeight: 30 }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </Stack>

            <Button
              variant="contained"
              onClick={() => {
                navigate("/shoppingcart");
              }}
              sx={{ maxWidth: 200, fontSize: "15px", mt: "1rem", mb: "1rem" }}
            >
              Add to Cart
            </Button>

            <Box sx={{ flexDirection: "column", justifyContent: "center" }}>
              <Typography
                sx={{
                  color: "#bd9191",
                  fontSize: "15px",
                }}
              >
                Description
              </Typography>

              <Typography
                sx={{
                  fontSize: "15px",
                }}
              >
                {productDescription}ç
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#bd9191",
                fontSize: "15px",
                mt: "1rem",
              }}
            >
              Delivery Details
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ProductDetails;
