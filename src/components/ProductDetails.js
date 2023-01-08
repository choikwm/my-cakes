import React, { useState } from "react";
import { Container, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
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
  console.log("location", location);

  const data = location.state;
  console.log("data", data);
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
  const [loading, setLoading] = useState(false);
  const [addCartSuccess, setAddCartSuccess] = useState(false);

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
    setLoading(true);
    commerce.cart
      .add(productId, quantity, {
        [variant_groups[0].id]: selectedSize,
        //  const [selectedSize, setSelectedSize] = useState(defaultOption.id);
        // ... any other group -> options here
      })
      .then((res) => {
        console.log("res add to cart", res);
        setLoading(false);
        setAddCartSuccess(true);
      });
  };

  const deliveryDetails = "Free door-to-door delivery for order over HK$500";

  return (
    <>
      <Stack
        sx={{
          mt: "3rem",
          mb: "3rem",
          justifyContent: "center",
          alignItems: "center",
        }}
        direction={{ xs: "column", md: "row" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <img src={image.url} width="300px" height="300px" alt="" />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            ml: "2rem",
            mt: "1rem",
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

          <Grid
            container
            direction="row"
            rowSpacing={1}
            sx={{ mt: "0.2rem", mb: "0.5rem" }}
          >
            <Grid item xs={2} md={2}>
              <Typography variant="h9" sx={{ fontSize: "14px" }}>
                Price:
              </Typography>
            </Grid>
            <Grid item xs={2} md={2}>
              <Typography variant="h9" sx={{ fontSize: "16px" }}>
                HK{selectedPrice}
              </Typography>
            </Grid>
          </Grid>

          {/* <Stack direction="row"> */}
          <Grid container direction="row" rowSpacing={1} sx={{ mb: "0.5rem" }}>
            <Grid item xs={2} md={2}>
              <Typography variant="h9" sx={{ fontSize: "14px" }}>
                Size:
              </Typography>
            </Grid>
            <Grid item xs={2} md={2}>
              <Select
                value={selectedSize}
                onChange={handleSizeChange}
                // MaxWidth="100px"
                sx={{ minWidth: 210, maxHeight: 30 }}
              >
                {variant_groups[0].options.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          {/* </Stack> */}

          {/* <Stack direction="row"> */}
          <Grid container direction="row" rowSpacing={1} sx={{ mb: "0.5rem" }}>
            <Grid item xs={2} md={2}>
              <Typography variant="h9" sx={{ fontSize: "14px" }}>
                Quanity:
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <Select
                value={quantity}
                onChange={handleQuanityChange}
                width="100px"
                sx={{ minWidth: 210, maxHeight: 30 }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </Grid>
          </Grid>
          {/* </Stack> */}

          <LoadingButton
            variant="containeåd"
            onClick={handleAddCart}
            loading={loading}
            sx={{ maxWidth: 200, fontSize: "15px", mt: "1rem", mb: "1rem" }}
          >
            {addCartSuccess ? "Added successfully" : "Add to Cart"}
          </LoadingButton>

          <Box
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              mr: "1rem",
            }}
          >
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
                maxWidth: 400,
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
      </Stack>
    </>
  );
};

export default ProductDetails;
