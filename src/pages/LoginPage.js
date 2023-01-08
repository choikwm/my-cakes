import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fallInLoveImage from "../images/homePageImages/fallInLoveImage.svg";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const LoginPage = () => {
  let navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/");
  };

  const [loginEmail, setLoginEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmailError, setLoginEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const checkEmptyLogin = () => {
    if (loginEmail === "") {
      setLoginEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    if (loginEmail !== "" && password !== "") {
      handleClickLogin();
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: "3rem",
        mb: "3rem",
      }}
    >
      <Typography style={{ fontSize: 40, color: "#edb29f", fontWeight: 300 }}>
        Welcome back
      </Typography>

      <img src={fallInLoveImage} width="300px" height="300px" alt="" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 300,
          maxWidth: "100%",
        }}
      >
        <TextField
          size="small"
          inputProps={{ style: { fontSize: 13 } }}
          InputLabelProps={{ style: { fontSize: 13 } }}
          label="Email"
          value={loginEmail}
          onChange={(event) => {
            if (loginEmailError) {
              setLoginEmailError(false);
            }
            console.log("event.target.value", event.target.value);
            setLoginEmail(event.target.value);
          }}
          error={loginEmailError}
          sx={{
            mb: "1rem",
          }}
        />

        <TextField
          size="small"
          inputProps={{ style: { fontSize: 13 } }}
          InputLabelProps={{ style: { fontSize: 13 } }}
          label="Password"
          type="password"
          value={password}
          onChange={(event) => {
            if (passwordError) {
              setPasswordError(false);
            }
            setPassword(event.target.value);
          }}
          error={passwordError}
          sx={{
            mb: "0.5rem",
          }}
        />
      </Box>

      <br></br>
      <Button
        variant="contained"
        style={{ color: "#FFFFFF", minWidth: 300 }}
        onClick={checkEmptyLogin}
      >
        Sign In
      </Button>

      <Button
        variant="text"
        size="small"
        style={{ fontSize: 12, color: "#a7c3cf", fontWeight: 600 }}
        sx={{ mt: "1rem", mb: "1rem" }}
      >
        Forgot your password? Reset
      </Button>

      <Button
        style={{ fontSize: 12, color: "#edb29f", fontWeight: 600 }}
        sx={{ mt: "1rem" }}
      >
        Don't have an account yet? Sign up
      </Button>
    </Container>
  );
};

export default LoginPage;
