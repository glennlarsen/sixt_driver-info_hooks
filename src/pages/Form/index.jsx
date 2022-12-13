import React from "react";
import Container from "components/Container";
import Header from "components/Header";
import Head from "components/Head";
import Layout from "components/Layout";
import FormDetails from './../../components/FormDetails/index';

function Form() {
  return (
    <Container>
      <Head page="Form" description="Choose what action you want to perform on this form" />
      <Header title="Flesland 1" flex={2} />
      <Layout backPage={"forms"}>
      <FormDetails />
      </Layout>
    </Container>
  );
}

export default Form;
