import React from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const FormTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FF5F00",
  },
});

const LoginForm = () => {
  const navigate = useNavigate();
  const submit = () => {
    navigate("/forms")
  }
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormTextField variant="standard" label="Username" type="text" />
      <FormTextField variant="standard" label="Password" type="password" />
      <button onClick={submit} type="submit">Login</button>
    </Box>
  );
}

export default LoginForm;
