import React from "react";
import Container from "components/Container";
import Header from "components/Header";
import LoginForm from "components/forms/LoginForm";
import Head from "components/Head";

function Login() {
  return (
    <Container>
      <Head page="Login" description="Login to start using Sixt Driver info Forms" />
      <Header title="Login" info="Driver Info Forms" />
      <LoginForm />
    </Container>
  );
}

export default Login;
