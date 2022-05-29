import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const PaymentPage = (props) => {
  // BELOW is for the shipping info
  const [cardHolderName, setCardHolderName] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardHolderNameError, setCardHolderNameError] = useState(false);
  const [creditCardError, setCreditCardError] = useState(false);
  const [expiryMonthError, setExpiryMonthError] = useState(false);
  const [expiryYearError, setExpiryYearError] = useState(false);
  const [cvcError, setCvcError] = useState(false);

  let location = useLocation();
  const checkoutData = location?.state || {};
  console.log("checkoutData", checkoutData);

  let navigate = useNavigate();

  const handleClickPayment = () => {
    if (cardHolderName === "") {
      setCardHolderNameError(true);
    }
    if (creditCard === "") {
      setCreditCardError(true);
    }
    if (expiryMonth === "") {
      setExpiryMonthError(true);
    }
    if (expiryYear === "") {
      setExpiryYearError(true);
    }
    if (cvc === "") {
      setCvcError(true);
    }
    if (
      cardHolderName !== "" &&
      creditCard !== "" &&
      expiryMonth !== "" &&
      expiryYear !== "" &&
      cvc !== ""
    ) {
      const paymentData = {
        payment: {
          gateway: "test_gateway",
          card: {
            number: creditCard,
            expiry_month: expiryMonth,
            expiry_year: expiryYear,
            cvc,
          },
        },
      };
      props.handleClickPayment(paymentData);
    }
  };

  return (
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
            color: "#bd9191",
            fontSize: "20px",
          }}
        >
          Please fill in the payment card details
        </Typography>

        <TextField
          size="small"
          inputProps={{ style: { fontSize: 13 } }} // font size of input text, inline styling
          InputLabelProps={{ style: { fontSize: 13 } }} // font size of input label
          label="Card holder name in full*"
          type="text"
          value={cardHolderName}
          onChange={(event) => {
            if (cardHolderNameError) {
              setCardHolderNameError(false);
            }
            setCardHolderName(event.target.value);
          }}
          error={cardHolderNameError}
          sx={{
            width: "340px",
            mt: "1rem",
          }}
        />

        <TextField
          size="small"
          inputProps={{ style: { fontSize: 13 } }} // font size of input text, inline styling
          InputLabelProps={{ style: { fontSize: 13 } }} // font size of input label
          label="Payment card number*"
          type="text"
          value={creditCard}
          onChange={(event) => {
            if (creditCardError) {
              setCreditCardError(false);
            }
            setCreditCard(event.target.value);
          }}
          error={creditCardError}
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
            label="Expiry Month*"
            type="text"
            value={expiryMonth}
            onChange={(event) => {
              if (expiryMonthError) {
                setExpiryMonthError(false);
              }
              setExpiryMonth(event.target.value);
            }}
            error={expiryMonthError}
            sx={{
              mt: "1rem",
            }}
          />

          <TextField
            size="small"
            inputProps={{ style: { fontSize: 13 } }} // font size of input text, inline styling
            InputLabelProps={{ style: { fontSize: 13 } }} // font size of input label
            label="Expiry Year*"
            type="text"
            value={expiryYear}
            onChange={(event) => {
              if (expiryYearError) {
                setExpiryYearError(false);
              }
              setExpiryYear(event.target.value);
            }}
            error={expiryYearError}
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
          label="CVC*"
          type="text"
          value={cvc}
          onChange={(event) => {
            if (cvcError) {
              setCvcError(false);
            }
            setCvc(event.target.value);
          }}
          error={cvcError}
          sx={{
            width: "340px",
            mt: "1rem",
          }}
        />

        <Button variant="contained" onClick={handleClickPayment}>
          Complete
        </Button>
        {/* 
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="region">Region</InputLabel>
                    <Select
                      size="small"
                      value={region}
                      onChange={(event) => {
                        if (regionError) {
                          setRegionError(false);
                        }
                        setRegion(event.target.value);
                      }}
                      error={regionError}
                    >
                      <MenuItem value={10}>Kowloon</MenuItem>
                      <MenuItem value={20}>Hong Kong Island</MenuItem>
                      <MenuItem value={30}>New Territories</MenuItem>
                    </Select>
                  </FormControl> */}
      </Container>
    </>
  );
};

export default PaymentPage;
