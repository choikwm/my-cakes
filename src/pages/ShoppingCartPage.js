import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { common } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import commerce from "../lib/commerce";
import ProductItem from "../components/ProductItem";

const ShoppingCartPage = () => {
  let navigate = useNavigate();

  const [cart, setCart] = useState({});

  useEffect(() => {
    commerce.cart
      .retrieve()
      .then((cart) => {
        console.log("cart items", cart);
        setCart(cart);
      })
      .catch((error) => console.log(error));
  }, []);

  // const [cartTotal, setCartTotal] = useState(0);

  // const total = () => {
  //   let totalAmount = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     totalAmount += cart[i].price;
  //   }
  //   setCartTotal(totalAmount);
  // };

  // const cartItems = cart.map;

  // const [itemCount, setItemCount] = useState(1);

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: "1.5rem",
          mb: "1.5rem",
        }}
      >
        <Typography
          sx={{
            color: "#bd9191",
            fontSize: "30px",
          }}
        >
          My Cart
        </Typography>

        <Grid
          container
          spacing={1}
          sx={{
            my: "0.5rem",
            border: "1px solid #fff",
            justifyContent: "center",
          }}
        >
          <Grid item sm={6} display={{ xs: "none", sm: "flex" }}>
            Product
          </Grid>
          <Grid item sm={2} display={{ xs: "none", sm: "flex" }}>
            Price
          </Grid>
          <Grid item sm={2} display={{ xs: "none", sm: "flex" }}>
            Quanity
          </Grid>
          <Grid item sm={2} display={{ xs: "none", sm: "flex" }}>
            Sub Total
          </Grid>

          {cart.line_items?.map((item) => {
            const {
              image,
              product_name,
              selected_options,
              price,
              quantity,
              line_total,
            } = item;
            console.log("mapping item", item);
            return (
              <>
                <Grid item xs={12} sm={6}>
                  <img
                    src={image.url}
                    alt="product photo"
                    width="100px"
                    height="100px"
                  />
                  <Typography variant="body2">{product_name}</Typography>
                  <Typography variant="body2">
                    Size: {selected_options[0].option_name}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography variant="body2">
                    HK{price.formatted_with_symbol}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography variant="body2">{quantity}</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography variant="body2">
                    HK{line_total.formatted_with_symbol}
                  </Typography>
                </Grid>
              </>
            );
          })}
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Typography variant="body2">
              {`Total: HK${cart.subtotal?.formatted_with_symbol || ""}`}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              variant="contained"
              // onClick={handleAddCart}
              onClick={() => {
                navigate("/checkout");
              }}
              sx={{ maxWidth: 200, fontSize: "15px", mt: "1rem", mb: "1rem" }}
            >
              Check Out
            </Button>
          </Grid>
        </Grid>

        {/* {cart.map((item) => (
          <ProductItem key={item.id} data={item} />
        ))} */}

        {/* <cartItems /> */}

        {/* <Box sx={{ mt: "1rem", p: 5, border: "1px dashed white" }}>
          <Stack direction="row">
            <Badge badgeContent={itemCount}>
              <ShoppingCartIcon />
            </Badge>

            <ButtonGroup sx={{ ml: "0.5rem" }}>
              <Button
                onClick={() => {
                  setItemCount(Math.max(itemCount - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                onClick={() => {
                  setItemCount(itemCount + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </Stack>
        </Box> */}
      </Container>
    </>
  );
};

export default ShoppingCartPage;
