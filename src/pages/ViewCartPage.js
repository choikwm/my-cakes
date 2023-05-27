import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import commerce from "../lib/commerce";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
import { CartContext } from "../components/CartContext";

const ViewCartPage = () => {
  const { totalItems, setTotalItems } = useContext(CartContext);
  let navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  // const [isEmptyCart, setIsEmptyCart] = useState(true);
  const [cart, setCart] = useState({});
  const [loadingShowCart, setLoadingShowCart] = useState(false);
  // const [loadingQuanityChange, setLoadingQuanityChange] = useState(false);
  const [loadingQuanityUpdate, setLoadingQuanityUpdate] = useState([]);
  const [loadingShipping, setLoadingShipping] = useState(false);
  const [loadingRemove, setLoadingRemove] = useState(false);

  useEffect(() => {
    setLoadingError(false);
    setLoading(true);
    setLoadingShowCart(true);
    // setIsEmptyCart(true);
    commerce.cart
      .retrieve()
      .then((incomingCart) => {
        console.log("cart items", incomingCart);
        setCart(incomingCart);
        setLoading(false);
        setTotalItems(incomingCart.total_items);
        // setIsEmptyCart(false);
      })
      .catch((error) => {
        setLoading(false);
        setLoadingError(true);

        console.log("There was an error fetching the cart", error);
      });
    setLoadingShowCart(false);
  }, []);

  const handleQtyChange = (id) => (event) => {
    // setLoadingQuanityChange(true);
    setLoadingQuanityUpdate((prevState) => [...prevState, id]);
    // console.log("id, event", id, event.target.value);
    commerce.cart.update(id, { quantity: event.target.value }).then((res) => {
      console.log("qty update res", res);
      setCart(res);
      // setLoadingQuanityChange(false);
      setLoadingQuanityUpdate((prevState) =>
        prevState.filter((item) => item !== id)
      );
      setTotalItems(res.total_items);
    });
  };

  console.log("cart", cart);

  const handleRemoveClick = (id) => (event) => {
    setLoadingRemove(true);
    commerce.cart.remove(id).then((res) => {
      console.log("remove update res", res);
      setCart(res);
      setLoadingRemove(false);
      setTotalItems(res.total_items);
    });
  };

  const handleCheckOut = () => {
    setLoadingShipping(true);
    // setEmptyCheckOutError(false);
    commerce.checkout
      .generateTokenFrom("cart", commerce.cart.id())

      .then((response) => {
        console.log("response.id", response.id);
        const token = {
          chekoutToken: response.id,
        };
        navigate("/checkout", { state: token });
        setLoadingShipping(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoadingShipping(false);
        // setEmptyCheckOutError(true);
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

      {loadingError && <Typography>Error</Typography>}

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid
          container
          spacing={1}
          sx={{
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
              fontWeight: "500",
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
            }}
          >
            Sub Total
          </Grid>

          {cart.line_items.length === 0 ? (
            <Grid item xs={12}>
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  my: "5rem",
                }}
              >
                <Typography
                  sx={{
                    color: "#f7bda6",
                    fontSize: "20px",
                  }}
                >
                  Your cart is empty
                </Typography>
              </Stack>
            </Grid>
          ) : (
            cart.line_items?.map((item) => {
              const {
                image: cartImage,
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
                      src={cartImage.url}
                      alt="Product"
                      width="100px"
                      height="100px"
                    />
                    <Typography variant="body2">{product_name}</Typography>
                    <Typography variant="body2">
                      Size: {selected_options[0].option_name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Stack direction="row">
                      <Typography
                        variant="body2"
                        display={{ xs: "flex", sm: "none" }}
                      >
                        {`Unit Price: HK${price.formatted_with_symbol}`}
                      </Typography>
                      <Typography
                        variant="body2"
                        display={{ xs: "none", sm: "flex" }}
                      >
                        {` HK${price.formatted_with_symbol}`}
                      </Typography>
                    </Stack>
                  </Grid>

                  <Grid item xs={12} sm={2}>
                    <Stack direction="column" alignItems="flex-start">
                      {/* {loadingQuanityChange && <CircularProgress />} */}
                      {loadingQuanityUpdate.includes(id) && (
                        <CircularProgress />
                      )}
                      {loadingQuanityUpdate.includes(id) === false && (
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
                      <></>
                      {loadingRemove && <CircularProgress />}
                      {loadingRemove === false && (
                        <Button size="small" onClick={handleRemoveClick(id)}>
                          Remove
                        </Button>
                      )}
                      <></>
                    </Stack>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={2}
                    display={{ xs: "none", sm: "flex" }}
                  >
                    <Typography variant="body2">
                      HK{line_total.formatted_with_symbol}
                    </Typography>
                  </Grid>
                </>
              );
            })
          )}
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
              sx={{
                color: "#fcad8d",
                fontSize: "18px",
                fontWeight: "800",
                mr: "1rem",
              }}
            >
              {`Total: HK${cart.subtotal?.formatted_with_symbol || ""}`}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            {loadingShipping && <CircularProgress />}
            {loadingShipping === false && cart.line_items.length !== 0 && (
              <Button
                variant="contained"
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
            )}
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default ViewCartPage;
