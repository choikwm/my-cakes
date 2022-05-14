import React, { useState } from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";

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
            <Typography variant="h9" sx={{ fontSize: "14px" }}>
              Price: {selectedPrice}
            </Typography>
            <Typography variant="h9" sx={{ fontSize: "14px" }}>
              Size:
              <Select
                fullWidth
                value={selectedSize}
                onChange={handleSizeChange}
              >
                {variant_groups[0].options.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </Typography>

            <Typography variant="h9" sx={{ fontSize: "14px" }}>
              Quanity:
              <Select fullWidth>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </Typography>

            <></>
            <Button>Add to Cart</Button>

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
                {description}
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
