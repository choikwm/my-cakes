import React, { useState } from "react";
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

const ShoppingCartPage = () => {
  const [itemCount, setItemCount] = useState(1);

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
          <Grid item md={6}>
            Product
          </Grid>
          <Grid item md={2}>
            Price
          </Grid>
          <Grid item md={2}>
            Quanity
          </Grid>
          <Grid item md={2}>
            Total
          </Grid>
        </Grid>

        <Box sx={{ mt: "1rem", p: 5, border: "1px dashed white" }}>
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
        </Box>
      </Container>
    </>
  );
};

export default ShoppingCartPage;
