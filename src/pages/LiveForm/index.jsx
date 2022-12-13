import Container from "components/Container";
import Header from "components/Header";
import Head from "components/Head";
import DriverInformation from './../../components/forms/DriverInformation/index';

function LiveForm() {

  return (
    <Container>
      <Head page="Liveform" description="Driver information form for clients to fill" />
      <Header title="Driver Information" />
      <DriverInformation />
    </Container>
  )
}

export default LiveForm;