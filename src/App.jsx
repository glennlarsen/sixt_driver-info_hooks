import "./sass/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Answers from "pages/Answers";
import Forms from "pages/Forms";
import Form from "pages/Form";
import LiveForm from "pages/LiveForm";
import Login from "pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/forms" element={ <Forms /> } />
        <Route path="/form" element={ <Form /> } />
        <Route path="/liveform" element={ <LiveForm /> } />
        <Route path="/answers" element={ <Answers /> } />
      </Routes>
    </Router>
  );
}

export default App;
