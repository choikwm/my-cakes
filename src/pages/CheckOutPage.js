import React, { useState } from "react";
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

import { useNavigate } from "react-router-dom";
// import ShippingInformation from "../components/ShippingInformation";

const CheckOutPage = () => {
  let navigate = useNavigate();

  const steps = ["Basket", "Shipping Information", "Payment"];

  //   const stepOne = "Basket"
  //   const stepTwo = "Shipping Information"
  //   const stepThree = "Payment"

  const [activeStep, setActiveStep] = useState(1);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //   const handleSkip = () => {
  //     if (!isStepOptional(activeStep)) {
  //       // You probably want to guard against something like this,
  //       // it should never occur unless someone's actively trying to break something.
  //       throw new Error("You can't skip a step that isn't optional.");
  //     }

  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //     setSkipped((prevSkipped) => {
  //       const newSkipped = new Set(prevSkipped.values());
  //       newSkipped.add(activeStep);
  //       return newSkipped;
  //     });
  //   };

  //   const handleReset = () => {
  //     setActiveStep(0);
  //   };

  //   const [activeStep, setActiveStep] = useState(0);

  // BELOW is for the shipping info
  const [receiver, setReceiver] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [receiverError, setReceiverError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [districtError, setDistrictError] = useState(false);

  //   const checkEmptyShippingInfo = () => {
  //     if (receiver === "") {
  //       setReceiverError(true);
  //     }
  //     if (email === "") {
  //       setEmailError(true);
  //     }

  //     if (receiver !== "" && email !== "") {
  //       //   handleClickToPayment();
  //     }

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: "2rem", mb: "2rem" }}>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              //   if (isStepOptional(index)) {
              //     labelProps.optional = (
              //       <Typography variant="caption">Optional</Typography>
              //     );
              //   }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Thank you for you&apos;re payment. The Order has been confirmed!
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />

                <Button
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back to homepage
                </Button>

                {/* <Button onClick={handleReset}>Reset</Button> */}
              </Box>
            </>
          ) : (
            <>
              {/* <Typography sx={{ mt: 2, mb: 1 }}>
                Step {activeStep + 1}
              </Typography> */}

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
                    color: "#bd9191",
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
                    inputProps={{ style: { fontSize: 13 } }} // font size of input text, inline styling
                    InputLabelProps={{ style: { fontSize: 13 } }} // font size of input label
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
                    inputProps={{ style: { fontSize: 13 } }} // font size of input text, inline styling
                    InputLabelProps={{ style: { fontSize: 13 } }} // font size of input label
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
                  inputProps={{ style: { fontSize: 13 } }} // font size of input text, inline styling
                  InputLabelProps={{ style: { fontSize: 13 } }} // font size of input label
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
                    inputProps={{ style: { fontSize: 13 } }} // font size of input text, inline styling
                    InputLabelProps={{ style: { fontSize: 13 } }} // font size of input label
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

                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <Select size="small" label="Region">
                      <MenuItem value={10}>Kowloon</MenuItem>
                      <MenuItem value={20}>Hong Kong Island</MenuItem>
                      <MenuItem value={30}>New Territories</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Container>

              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  //   onClick={handleBack}
                  onClick={() => {
                    navigate("/viewcart");
                  }}
                  sx={{ mr: 1 }}
                >
                  Return to cart
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {
                  isStepOptional(activeStep)
                  //   <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  //     Skip
                  //   </Button>
                }

                <Button
                  onClick={() => {
                    navigate("/payment");
                  }}
                >
                  {activeStep === steps.length - 1
                    ? "Continue to payment"
                    : "Continue to shipping"}
                </Button>

                {/* <Button onClick={handleNext}>
                  {activeStep === steps.length - 1
                    ? "Continue to payment"
                    : "Continue to shipping"}
                </Button> */}
              </Box>
            </>
          )}
        </Box>
      </Container>

      {/* <stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </stepper> */}
    </>
  );
};

export default CheckOutPage;
