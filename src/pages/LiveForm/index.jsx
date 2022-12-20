import { useParams } from "react-router-dom";

import Container from "components/Container";
import Header from "components/Header";
import Head from "components/Head";
import DriverInformation from "components/forms/DriverInformation";
import DriverInformation2 from "components/forms/DriverInformation2";

function LiveForm() {
  const { formName } = useParams();

  return (
    <Container>
      <Head
        page="Liveform"
        description="Driver information form for clients to fill"
      />
      <Header title="Driver Information" info={formName} />
      {formName === "flesland1" && <DriverInformation />}
      {formName === "flesland2" && <DriverInformation2 />}
    </Container>
  );
}

export default LiveForm;
