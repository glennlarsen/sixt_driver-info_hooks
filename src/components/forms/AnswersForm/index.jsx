import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#FF5F00",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

const FormTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FF5F00",
  },
});

function AnswersForm() {
    const navigate = useNavigate();
  const [copySuccess, setCopySuccess] = useState("");
  const countryRef = useRef(null);
  const streetRef = useRef(null);
  const postalRef = useRef(null);
  const cityRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const [show, setShow] = useState(true);

  const refreshPage = () => {
    navigate(0);
  };

  function copyEmail(e) {
    emailRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied Email!");
    setShow(true);
  }

  function copyPhone(e) {
    phoneRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied Phone Number!");
    setShow(true);
  }

  function copyCity(e) {
    cityRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied City!");
    setShow(true);
  }

  function copyPostal(e) {
    postalRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied Postal Code!");
    setShow(true);
  }

  function copyStreet(e) {
    streetRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied Street!");
    setShow(true);
  }

  function copyCountry(e) {
    countryRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied Country!");
    setShow(true);
  }

  const current = new Date();
  const todayDate = `${current.getDate()}.${current.getMonth()+1}.${current.getFullYear()} kl.${current.toLocaleTimeString("No-no")}`;

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="answers-form"
      >
        <span className="last-received"><strong>Last Answer: </strong>{todayDate} </span>
        <Tooltip title="Click to Copy">
          <FormTextField
            onClick={copyCountry}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" color="primary">
                    <ContentCopyIcon
                      sx={{ height: ".8em", width: ".8em" }}
                      onClick={copyCountry}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            variant="standard"
            label="Country"
            type="text"
            defaultValue="Norway"
            inputRef={countryRef}
          />
        </Tooltip>
        <Tooltip title="Click to Copy">
          <FormTextField
            onClick={copyStreet}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" color="primary">
                    <ContentCopyIcon
                      sx={{ height: ".8em", width: ".8em" }}
                      onClick={copyStreet}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            variant="standard"
            label="Street"
            type="text"
            defaultValue="Vestre holbergsallmenningen 10"
            inputRef={streetRef}
          />
        </Tooltip>
        <Box gap={2} display="flex">
          <Tooltip title="Click to Copy">
            <FormTextField
              onClick={copyPostal}
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" color="primary">
                      <ContentCopyIcon
                        sx={{ height: ".8em", width: ".8em" }}
                        onClick={copyPostal}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="standard"
              label="Postal Code"
              type="number"
              defaultValue="5011"
              inputRef={postalRef}
            />
          </Tooltip>
          <Tooltip title="Click to Copy">
            <FormTextField
              onClick={copyCity}
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" color="primary">
                      <ContentCopyIcon
                        sx={{ height: ".8em", width: ".8em" }}
                        onClick={copyCity}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="standard"
              label="City"
              type="text"
              fullWidth
              defaultValue="Bergen"
              inputRef={cityRef}
            />
          </Tooltip>
        </Box>
        <Tooltip title="Click to Copy">
          <FormTextField
            onClick={copyPhone}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" color="primary">
                    <ContentCopyIcon
                      sx={{ height: ".8em", width: ".8em" }}
                      onClick={copyPhone}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            variant="standard"
            label="Phone Number"
            type="phone"
            defaultValue="+4791771028"
            inputRef={phoneRef}
          />
        </Tooltip>
        <Tooltip title="Click to Copy">
          <FormTextField
            onClick={copyEmail}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" color="primary">
                    <ContentCopyIcon
                      sx={{ height: ".8em", width: ".8em" }}
                      onClick={copyEmail}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            variant="standard"
            label="Email"
            type="email"
            defaultValue="glenn_lar@hotmail.com"
            inputRef={emailRef}
          />
        </Tooltip>
        <button onClick={refreshPage} type="submit">
          Refresh
        </button>
        <span className='btn-reset'>Clear fields</span>
        {copySuccess && show ? (
          <Collapse in={show}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              severity="success"
            >
              {copySuccess}
            </Alert>
          </Collapse>
        ) : (
          <div className="copy-alert"></div>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default AnswersForm;
