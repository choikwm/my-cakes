import React from "react";
import "./App.css";
import { Outlet, Routes, Route } from "react-router-dom";

import { themeOptions } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ProductPage from "./pages/ProductPage";
import ViewCartPage from "./pages/ViewCartPage";
import CheckOutPage from "./pages/CheckOutPage";
import PaymentPage from "./pages/PaymentPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";
import ProductDetails from "./components/ProductDetails";

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
          <Route path="checkout" element={<CheckOutPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="viewcart" element={<ViewCartPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
