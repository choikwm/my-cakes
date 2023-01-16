import React, { useEffect, useState } from "react";
import commerce from "../lib/commerce";
import ProductItem from "../components/ProductItem";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Stack } from "@mui/material";

const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    console.log("==fetching");
    commerce.products
      .list({
        include: "variant_groups",
      })
      .then((res) => {
        console.log("api products response", res);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  }, []);

  useEffect(() => {
    console.log("products state", products);
  }, [products]);

  return (
    <Container
      maxWidth="md"
      sx={{
        flexDirection: { xs: "column", sm: "row" },

        alignItems: "center",
        mt: "1rem",
        mb: "1rem",
      }}
    >
      <Typography
        sx={{
          color: "#99bdc4",
          fontSize: "30px",
          ml: "1rem",
          mt: "2rem",
          mb: "1.5rem",
          display: "flex",
          justifyContent: "center",
          alignitems: "center",
        }}
      >
        View our collections
      </Typography>

      {loading ? (
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignitems: "center",
          }}
          variant="body2"
        >
          <CircularProgress />
        </Typography>
      ) : (
        <>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 3 }}
            justifyContent="center"
            alignItems="center"
          >
            {products.map((item) => {
              console.log("mapped item", item);
              return <ProductItem key={item.id} data={item} />;
            })}
          </Stack>
        </>
      )}
    </Container>
  );
};

export default ProductPage;
