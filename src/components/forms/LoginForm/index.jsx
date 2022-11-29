import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const FormTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FF5F00",
  },
});

function LoginForm() {
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
