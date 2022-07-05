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
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";

const ViewCartPage = () => {
  let navigate = useNavigate();

  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(false);

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
  const handleQtyChange = (id) => (event) => {
    setLoading(true);
    // console.log("id, event", id, event.target.value);
    commerce.cart.update(id, { quantity: event.target.value }).then((res) => {
      console.log("res", res);
      setCart(res.cart);
      setLoading(false);
    });
  };

  console.log("cart", cart);

  const handleRemoveClick = (id) => (event) => {
    commerce.cart.remove(id).then((res) => setCart(res.cart));
  };

  const handleCheckOut = () => {
    commerce.checkout
      .generateTokenFrom("cart", commerce.cart.id())
      .then((response) => {
        console.log(response.id);
        const token = {
          chekoutToken: response.id,
        };
        navigate("/checkout", { state: token });
      });
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: "1.5rem",
        mb: "2.5rem",
      }}
    >
      <Typography
        sx={{
          color: "#f7bda6",
          fontSize: "30px",
          mb: "1rem",
        }}
      >
        My Cart
      </Typography>

      <Grid
        container
        spacing={1}
        sx={{
          //  color: "#f0d0c5",

          my: "0.5rem",
          border: "1px solid #fff",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          sm={6}
          display={{ xs: "none", sm: "flex" }}
          sx={{
            backgroundColor: "#faf3f0",
            color: "#99bdc4",
            // fontSize: "15px",
          }}
        >
          Product
        </Grid>
        <Grid
          item
          sm={2}
          display={{ xs: "none", sm: "flex" }}
          sx={{
            backgroundColor: "#faf3f0",
            color: "#99bdc4",
            // fontSize: "18px",
          }}
        >
          Price
        </Grid>
        <Grid
          item
          sm={2}
          display={{ xs: "none", sm: "flex" }}
          sx={{
            backgroundColor: "#faf3f0",
            color: "#99bdc4",
            // fontSize: "18px",
          }}
        >
          Quanity
        </Grid>
        <Grid
          item
          sm={2}
          display={{ xs: "none", sm: "flex" }}
          sx={{
            backgroundColor: "#faf3f0",
            color: "#99bdc4",
            padding: "0.5rem",
            // fontSize: "16px",
          }}
        >
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
            id,
          } = item;
          // console.log("mapping item", item);
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
                <Stack direction="column" alignItems="flex-start">
                  {loading && <CircularProgress />}
                  {loading === false && (
                    <Select
                      sx={{ width: 70, height: 40 }}
                      value={quantity}
                      onChange={handleQtyChange(id)}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((qty) => (
                        <MenuItem value={qty}>{qty}</MenuItem>
                      ))}
                    </Select>
                  )}
                  <Button size="small" onClick={handleRemoveClick(id)}>
                    Remove
                  </Button>
                </Stack>
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
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            backgroundColor: "#fceee8",
            padding: "0.5rem",
          }}
        >
          <Typography
            // variant="body2"
            sx={{
              color: "#fcad8d",
              fontSize: "18px",

              mr: "1rem",
            }}
          >
            {`Total: HK${cart.subtotal?.formatted_with_symbol || ""}`}
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            // onClick={handleAddCart}
            onClick={handleCheckOut}
            sx={{
              maxWidth: 200,
              fontSize: "15px",
              mt: "1rem",
              mb: "1rem",
              mr: "2rem",
            }}
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
  );
};

export default ViewCartPage;
