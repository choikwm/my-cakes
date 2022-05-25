import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

const ShippingInformation = () => {
  const [receiver, setReceiver] = useState("");
  const [email, setEmail] = useState("");
  const [receiverError, setReceiverError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const checkEmptyShippingInfo = () => {
    if (receiver === "") {
      setReceiverError(true);
    }
    if (email === "") {
      setEmailError(true);
    }

    if (receiver !== "" && email !== "") {
      //   handleClickToPayment();
    }

    return (
      <>
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            // mr: "100rem",
          }}
        >
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
            label="Email*"
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
              mt: "1rem",
            }}
          />
        </Container>
      </>
    );
  };
};

export default ShippingInformation;
