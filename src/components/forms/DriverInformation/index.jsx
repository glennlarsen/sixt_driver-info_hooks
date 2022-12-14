import React, { useState, useMemo } from "react";
import { useForm } from "react-hook-form";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import DoneIcon from "@mui/icons-material/Done";

import countryList from "react-select-country-list";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import SendDriverInfo from "utils/SendDriverInfo";
import AlertMessage from "components/AlertMessage";

const FormTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FF5F00",
  },
});

function DriverInformation() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Function that will run when form is submitted
  async function onSubmit(data) {
    setLoading(true);
    const message = await SendDriverInfo(data);
    if (message.success) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      setSubmitted(true);
      reset();
    } else {
      setLoading(false);
      setSubmitted(false);
      setError(true);
    }
  }

  const countries = useMemo(() => countryList().getData(), []);

  if (loading && submitted) {
    return (
      <div className="loaderContainer form-complete">
        <DoneIcon sx={{ fontSize: 100, color: "#FF5F00" }} />
        Thank you! Have a great day.
      </div>
    );
  }

  if (error) {
    return (
      <AlertMessage
        variant="error"
        title="Error"
        message="An error occured, Please try again later"
      />
    );
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormTextField
        variant="standard"
        label="Country"
        type="text"
        {...register("country")}
        error={Boolean(errors.country)}
        helperText={errors.country ? errors.country.message : ""}
        InputProps={
          errors.country
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <ErrorRoundedIcon color="error" />
                  </InputAdornment>
                ),
              }
            : null
        }
      />
      <FormTextField
        variant="standard"
        label="Street"
        type="text"
        {...register("street")}
        error={Boolean(errors.street)}
        helperText={errors.street ? errors.street.message : ""}
        InputProps={
          errors.street
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <ErrorRoundedIcon color="error" />
                  </InputAdornment>
                ),
              }
            : null
        }
      />
      <Box gap={2} display="flex">
        <FormTextField
          variant="standard"
          label="Postal Code"
          type="text"
          {...register("postal")}
          error={Boolean(errors.postal)}
          helperText={errors.postal ? errors.postal.message : ""}
          InputProps={
            errors.postal
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <ErrorRoundedIcon color="error" />
                    </InputAdornment>
                  ),
                }
              : null
          }
        />
        <FormTextField
          variant="standard"
          label="City"
          type="text"
          fullWidth
          {...register("city")}
          error={Boolean(errors.city)}
          helperText={errors.city ? errors.city.message : ""}
          InputProps={
            errors.city
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <ErrorRoundedIcon color="error" />
                    </InputAdornment>
                  ),
                }
              : null
          }
        />
      </Box>
      <FormTextField
        variant="standard"
        label="Phone Number"
        type="number"
        {...register("phone")}
        error={Boolean(errors.phone)}
        helperText={errors.phone ? errors.phone.message : ""}
        InputProps={
          errors.phone
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <ErrorRoundedIcon color="error" />
                  </InputAdornment>
                ),
              }
            : null
        }
      />
      <FormTextField
        variant="standard"
        label="Email"
        type="email"
        {...register("email")}
        error={Boolean(errors.email)}
        helperText={errors.email ? errors.email.message : ""}
        InputProps={
          errors.email
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <ErrorRoundedIcon color="error" />
                  </InputAdornment>
                ),
              }
            : null
        }
      />
      <button type="submit">Submit</button>
      <span onClick={() => reset()} className="btn-reset">Reset fields</span>
    </Box>
  );
}

export default DriverInformation;
