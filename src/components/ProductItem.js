import React from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";

const ProductItem = (props) => {
  const { data } = props;
  const { name = "", price = "", image, variant_groups } = data;
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => {
        navigate(`/products/${data.id}`, { state: data });
      }}
    >
      <img src={image.url} width="300px" height="300px" alt="" />

      <Typography sx={{ mt: "1rem", fontSize: "18px" }}>{name}</Typography>

      <Typography sx={{ fontSize: "14px" }}>
        From HK{variant_groups[0].options[0].price.formatted_with_symbol}
      </Typography>
    </Box>
  );
};

export default ProductItem;
