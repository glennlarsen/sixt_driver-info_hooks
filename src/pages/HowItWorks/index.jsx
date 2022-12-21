import Container from "components/Container";
import Header from "components/Header";
import Head from "components/Head";
import Layout from "components/Layout/index";

import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function HowItWorks() {
  return (
    <Container>
      <Head
        page="How it Works?"
        description="This is how SIXT Driver info forms work. Follow the instructions here."
      />
      <Header title="How it Works?" info="Driver Info Forms" flex={2} />
      <Layout showHowItWorks="none">
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={6}>
              <Paper className="box-how">
                <h2>1</h2>
                <p>Login on Tablet and PC</p>
              </Paper>
            </Grid>
            <Grid xs={6}>
              <Paper className="box-how">
                <h2>2</h2>
                <p>Open the same form on Tablet and PC</p>
              </Paper>
            </Grid>
            <Grid xs={6}>
              <Paper className="box-how">
                <h2>3</h2>
                <p>Open the Live Form on the tablet</p>
              </Paper>
            </Grid>
            <Grid xs={6}>
              <Paper className="box-how">
                <h2>4</h2>
                <p>Open the Answers on the PC</p>
              </Paper>
            </Grid>
            <Grid xs={6}>
              <Paper className="box-how">
                <h2>5</h2>
                <p>
                  Fill the Live form and Submit. Click Refresh on the answer
                  Page.
                </p>
              </Paper>
            </Grid>
            <Grid xs={6}>
              <Paper className="box-how">
                <h2>6</h2>
                <p>
                  Click to copy each field. Delete driver when done to avoid any
                  GDPR cases.
                </p>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </Container>
  );
}

export default HowItWorks;
