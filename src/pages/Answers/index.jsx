import React from "react";
import Container from "components/Container";
import Header from "components/Header";
import Head from "components/Head";
import Layout from "components/Layout";
import AnswersForm from "components/forms/AnswersForm";

function Answers() {
  return (
    <Container>
      <Head page="Answers" description="Showing answers that the client provides to the form" />
      <Header title="Answers" flex={2} />
      <Layout backPage={"form"}>
      <AnswersForm />
      </Layout>
    </Container>
  );
}

export default Answers;
