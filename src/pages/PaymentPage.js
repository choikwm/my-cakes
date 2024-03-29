import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";

const PaymentPage = (props) => {
  // BELOW is for the shipping info
  const [cardHolderName, setCardHolderName] = useState("");
  const [creditCard, setCreditCard] = useState("4242424242424242");
  const [expiryMonth, setExpiryMonth] = useState("01");
  const [expiryYear, setExpiryYear] = useState("23");
  const [cvc, setCvc] = useState("123");
  const [cardHolderNameError, setCardHolderNameError] = useState(false);
  const [creditCardError, setCreditCardError] = useState(false);
  const [expiryMonthError, setExpiryMonthError] = useState(false);
  const [expiryYearError, setExpiryYearError] = useState(false);
  const [cvcError, setCvcError] = useState(false);
  const [loading, setLoading] = useState(true);

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
            postal_zip_code: "94103",
          },
        },
      };
      props.handlePayment(paymentData);
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
            color: "#89cbd9",
            fontSize: "20px",
          }}
        >
          Please fill in the payment card details
        </Typography>

        <TextField
          size="small"
          inputProps={{ style: { fontSize: 13 } }}
          InputLabelProps={{ style: { fontSize: 13 } }}
          label="Card holder name in full*"
          type="text"
          value={cardHolderName}
          onChange={(event) => {
            console.log("event", event);
            if (cardHolderNameError) {
              console.log("cardHolderNameError", cardHolderNameError);

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
          inputProps={{ style: { fontSize: 13 } }}
          InputLabelProps={{ style: { fontSize: 13 } }}
          label="Payment card number*"
          type="text"
          // value="4242 4242 4242 4242"
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
            inputProps={{ style: { fontSize: 13 } }}
            InputLabelProps={{ style: { fontSize: 13 } }}
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
            inputProps={{ style: { fontSize: 13 } }}
            InputLabelProps={{ style: { fontSize: 13 } }}
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
          inputProps={{ style: { fontSize: 13 } }}
          InputLabelProps={{ style: { fontSize: 13 } }}
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
            mb: "1rem",
          }}
        />

        <Button
          variant="contained"
          onClick={handleClickPayment}
          sx={{
            mb: "3rem",
          }}
        >
          Complete
        </Button>

        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            onClick={() => props.handleReturn()}
            sx={{ mr: 1 }}
          >
            Return to shipping details
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default PaymentPage;
