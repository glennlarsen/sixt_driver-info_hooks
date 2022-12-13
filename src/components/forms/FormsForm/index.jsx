import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";

const FormsForm = () => {
    const navigate = useNavigate();
  const onClick = () => {
    navigate("/form")
  }

  const onClickNew = () => {
    navigate("/form")
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Paper onClick={onClick} className="box">Flesland 1</Paper>
        </Grid>
        <Grid xs={6}>
          <Paper onClick={onClick} className="box">Flesland 2</Paper>
        </Grid>
        <Grid xs={6}>
          <Paper onClick={onClick} className="box"> Flesland 3</Paper>
        </Grid>
        <Grid xs={6}>
          <Paper onClick={onClick} className="box">Flesland 4</Paper>
        </Grid>
        <Grid xs={6}>
          <Paper onClick={onClickNew} className="box-new">New form</Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FormsForm;
