import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const SignUpPage = () => {
  let navigate = useNavigate();

  const handleClickSignUp = () => {
    navigate("/");
  };

  const handleNavigateLoginPage = () => {
    navigate("/login");
  };

  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nickNameError, setNickNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const checkEmptySignup = () => {
    if (nickName === "") {
      setNickNameError(true);
    }
    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    if (confirmPassword === "") {
      setConfirmPasswordError(true);
    }
    if (password !== confirmPassword) {
      setPasswordError(true);
      setConfirmPasswordError(true);
    }
    if (
      nickName !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      handleClickSignUp();
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
      }}
    >
      <Box
        sx={{
          width: 300,
        }}
      >
        <Typography
          style={{ fontSize: 40, color: "#edb29f", fontWeight: 300 }}
          sx={{ mt: "3rem", mb: "0.5rem" }}
        >
          Welcome
        </Typography>

        <Typography
          style={{ fontSize: 15, color: "#edb29f", fontWeight: 300 }}
          sx={{ mb: "1rem" }}
        >
          Create a myCAKES account
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: "0px",
          mb: "0px",
          width: 300,
          maxWidth: "100%",
        }}
      >
        <TextField
          size="small"
          inputProps={{ style: { fontSize: 13 } }} // font size of input text, inline styling
          InputLabelProps={{ style: { fontSize: 13 } }} // font size of input label
          label="Nickname*"
          type="text"
          value={nickName}
          onChange={(event) => {
            if (nickNameError) {
              setNickNameError(false);
            }
            setNickName(event.target.value);
          }}
          error={nickNameError}
          sx={{
            mt: "1rem",
          }}
        />

        <TextField
          size="small"
          inputProps={{ style: { fontSize: 13 } }}
          InputLabelProps={{ style: { fontSize: 13 } }}
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

        <TextField
          size="small"
          inputProps={{ style: { fontSize: 13 } }}
          InputLabelProps={{ style: { fontSize: 13 } }}
          label="Password*"
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
            mt: "1rem",
          }}
        />

        <TextField
          size="small"
          inputProps={{ style: { fontSize: 13 } }}
          InputLabelProps={{ style: { fontSize: 13 } }}
          label="Enter your password again*"
          type="password"
          value={confirmPassword}
          onChange={(event) => {
            if (confirmPasswordError) {
              setConfirmPasswordError(false);
            }
            setConfirmPassword(event.target.value);
          }}
          error={confirmPasswordError}
          helperText={confirmPasswordError && "Passwords are not the same"}
          sx={{
            mt: "1rem",
            mb: "1rem",
          }}
        />
      </Box>

      <Button
        variant="contained"
        style={{ minWidth: 300, color: "#FFFFFF" }}
        size="large"
        onClick={checkEmptySignup}
      >
        Sign Up
      </Button>

      <Button
        variant="outlined"
        style={{ minWidth: 300, color: "#a7c3cf" }}
        sx={{
          mt: "3rem",
          mb: "3rem",
        }}
        onClick={handleNavigateLoginPage}
      >
        Back to login page
      </Button>
    </Container>
  );
};

export default SignUpPage;
