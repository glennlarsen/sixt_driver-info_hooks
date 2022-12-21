import Container from "components/Container";
import Header from "components/Header";
import Head from "components/Head";
import Layout from "components/Layout/index";
import HowToDesciption from "components/HowToDesciption";

function HowItWorks() {
  return (
    <Container>
      <Head
        page="How it Works?"
        description="This is how SIXT Driver info forms work. Follow the instructions here."
      />
      <Header title="How it Works?" info="Driver Info Forms" flex={2} />
      <Layout showHowItWorks="none">
        <HowToDesciption />
      </Layout>
    </Container>
  );
}

export default HowItWorks;
