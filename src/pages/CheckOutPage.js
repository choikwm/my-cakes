import React, { useState } from "react";
import commerce from "../lib/commerce";
import { useNavigate, useLocation } from "react-router-dom";
import PaymentPage from "./PaymentPage";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const CheckOutPage = () => {
  const [receiver, setReceiver] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [region, setRegion] = useState("Kowloon");
  const [receiverError, setReceiverError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [districtError, setDistrictError] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [skipped, setSkipped] = useState(new Set());

  let navigate = useNavigate();
  let location = useLocation();
  const checkoutToken = location?.state?.chekoutToken || "";
  console.log("checkoutToken", checkoutToken);

  const steps = ["Basket", "Shipping Information", "Payment"];

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleClickToPayment = () => {
    if (email === "") {
      setEmailError(true);
    }
    if (receiver === "") {
      setReceiverError(true);
    }
    if (mobile === "") {
      setMobileError(true);
    }
    if (address === "") {
      setAddressError(true);
    }
    if (district === "") {
      setDistrictError(true);
    }
    if (
      email !== "" &&
      receiver !== "" &&
      mobile !== "" &&
      address !== "" &&
      district !== ""
    ) {
      setActiveStep(2);
    }
  };

  const handlePayment = (paymentData) => {
    console.log("paymentData", paymentData);
    const checkoutData = {
      customer: {
        email,
        phone: mobile,
      },
      shipping: {
        name: receiver,
        street: address,
        town_city: district,
        county_state: region,
      },
      ...paymentData,
    };
    console.log("checkoutData", checkoutData);
    console.log("checkoutToken", checkoutToken);
    commerce.checkout.capture(checkoutToken, checkoutData).then((res) => {
      console.log("res", res);
    });
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: "2rem", mb: "2rem" }}>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>
                    {label === "Basket" ? (
                      <Button
                        onClick={() => {
                          console.log("clicked");
                          navigate("/viewcart");
                        }}
                      >
                        {label}
                      </Button>
                    ) : (
                      label
                    )}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === 1 ? (
            <>
              <Container
                maxWidth="md"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "2rem",
                  mb: "2rem",
                }}
              >
                <Typography
                  sx={{
                    color: "#89cbd9",
                    fontSize: "20px",
                  }}
                >
                  Please fill in the delivery details
                </Typography>

                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 13 } }} // font size of input text, inline styling
                  InputLabelProps={{ style: { fontSize: 13 } }} // font size of input label
                  label="Email address to receive your order's update*"
                  type="email"
                  pattern=".+@globex\.com"
                  value={email}
                  onChange={(event) => {
                    if (emailError) {
                      setEmailError(false);
                    }
                    setEmail(event.target.value);
                  }}
                  error={emailError}
                  sx={{
                    width: "340px",
                    mt: "1rem",
                  }}
                />

                <Stack direction="row">
                  <TextField
                    size="small"
                    inputProps={{ style: { fontSize: 13 } }}
                    InputLabelProps={{ style: { fontSize: 13 } }}
                    label="Receiver*"
                    type="text"
                    value={receiver}
                    onChange={(event) => {
                      if (receiverError) {
                        setReceiverError(false);
                      }
                      setReceiver(event.target.value);
                    }}
                    error={receiverError}
                    sx={{
                      mt: "1rem",
                    }}
                  />

                  <TextField
                    size="small"
                    inputProps={{ style: { fontSize: 13 } }}
                    InputLabelProps={{ style: { fontSize: 13 } }}
                    label="Mobile*"
                    type="text"
                    value={mobile}
                    onChange={(event) => {
                      if (mobileError) {
                        setMobileError(false);
                      }
                      setMobile(event.target.value);
                    }}
                    error={mobileError}
                    sx={{
                      ml: "1rem",
                      mt: "1rem",
                    }}
                  />
                </Stack>

                <TextField
                  size="small"
                  inputProps={{ style: { fontSize: 13 } }}
                  InputLabelProps={{ style: { fontSize: 13 } }}
                  label="Address*"
                  type="text"
                  value={address}
                  onChange={(event) => {
                    if (addressError) {
                      setAddressError(false);
                    }
                    setAddress(event.target.value);
                  }}
                  error={addressError}
                  sx={{
                    width: "340px",
                    mt: "1rem",
                  }}
                />

                <Stack direction="row">
                  <TextField
                    size="small"
                    inputProps={{ style: { fontSize: 13 } }}
                    InputLabelProps={{ style: { fontSize: 13 } }}
                    label="District*"
                    type="text"
                    value={district}
                    onChange={(event) => {
                      if (districtError) {
                        setDistrictError(false);
                      }
                      setDistrict(event.target.value);
                    }}
                    error={districtError}
                    sx={{
                      mt: "1rem",
                    }}
                  />

                  <FormControl sx={{ mt: "1rem", minWidth: 175 }}>
                    <InputLabel id="region">Region</InputLabel>
                    <Select
                      sx={{ ml: "0.5rem", height: 35, fontSize: "13px" }}
                      // size="small"
                      label="Region"
                      value={region}
                      onChange={(event) => {
                        setRegion(event.target.value);
                      }}
                    >
                      <MenuItem value={"Kowloon"}>Kowloon</MenuItem>
                      <MenuItem value={"Hong Kong Island"}>
                        Hong Kong Island
                      </MenuItem>
                      <MenuItem value={"New Territories"}>
                        New Territories
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Container>

              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={() => {
                    navigate("/viewcart");
                  }}
                  sx={{ mr: 1 }}
                >
                  Return to cart
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep)}

                <Button onClick={handleClickToPayment}>
                  {activeStep === steps.length - 1
                    ? "Continue to payment"
                    : "Continue to shipping"}
                </Button>
              </Box>
            </>
          ) : (
            <PaymentPage
              handlePayment={handlePayment}
              handleReturn={() => setActiveStep(1)}
            />
            //
          )}
        </Box>
      </Container>
    </>
  );
};

export default CheckOutPage;
