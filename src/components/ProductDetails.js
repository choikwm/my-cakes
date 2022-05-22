import React, { useState } from "react";
import { Container, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import commerce from "../lib/commerce";

const ProductDetails = () => {
  const location = useLocation();
  const data = location.state;
  const {
    id: productId,
    name,
    price,
    image,
    variant_groups,
    description,
  } = data;
  const defaultOption = variant_groups[0].options[0];
  const [selectedSize, setSelectedSize] = useState(defaultOption.id);
  const [selectedPrice, setSelectedPrice] = useState(
    defaultOption.price.formatted_with_symbol
  );

  const [quantity, setQuantity] = useState(1);

  let productDescription = description.slice(3, description.length - 5);

  let navigate = useNavigate();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  // const functionName = (param, param2, param3) => {
  //   // whatever you want to do
  // };

  const handleQuanityChange = (event) => {
    console.log("event", event);
    setQuantity(event.target.value);
  };

  const handleSizeChange = (event) => {
    const { value } = event.target;
    setSelectedSize(value);
    const price = variant_groups[0].options.find((item) => item.id === value)
      .price.formatted_with_symbol;
    setSelectedPrice(price);
  };

  const handleAddCart = () => {
    commerce.cart.add(productId, quantity, {
      [variant_groups[0].id]: selectedSize,
      // ... any other group -> options here
    });
  };

  const deliveryDetails = "Free door-to-door delivery for order over HK$500";

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
              Price: HK{selectedPrice}
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
                value={quantity}
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
              onClick={handleAddCart}
              // onClick={() => {
              //   navigate("/shoppingcart");
              // }}
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
                {productDescription}
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

            <Typography
              sx={{
                fontSize: "15px",
              }}
            >
              {deliveryDetails}
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ProductDetails;
