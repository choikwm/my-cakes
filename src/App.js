import React, { useState } from "react";
import "./App.css";
import { Outlet, Routes, Route } from "react-router-dom";

import { themeOptions } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import PromotionPage from "./pages/PromotionPage";
import ProductPage from "./pages/ProductPage";

import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductDetails from "./components/ProductDetails";

// import ReactFullpage from "@fullpage/react-fullpage";
// import EmojiPicker from "emoji-picker-react";

const ShowHeaderBar = () => {
  return (
    <>
      <HeaderBar />
      <Outlet />
      <FooterBar />
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<ShowHeaderBar />}>
          <Route index element={<HomePage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="contactus" element={<ContactUsPage />} />
          <Route path="promotions" element={<PromotionPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="products-details" element={<ProductDetailsPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;