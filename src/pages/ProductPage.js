import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import commerce from "../lib/commerce";
import ProductItem from "../components/ProductItem";
import CircularProgress from "@mui/material/CircularProgress";

const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = () => {
      commerce.products
        .list()
        .then((products) => {
          console.log("api products", products);
          setProducts(products.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log("There was an error fetching the products", error);
        });
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log("products", products);
  }, [products]);

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
        mt: "1rem",
      }}
    >
      <Typography
        sx={{
          color: "#bd9191",
          fontSize: "30px",
          ml: "1rem",
          mt: "1rem",
          mb: "1.5rem",
        }}
      >
        View our collections
      </Typography>
      {loading ? (
        <Typography variant="body2">
          <CircularProgress />
        </Typography>
      ) : (
        <>
          {products.map((item) => (
            <ProductItem key={item.id} data={item} />
          ))}
        </>
      )}
    </Container>
  );
};

export default ProductPage;
