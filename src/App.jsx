import { Container } from "react-bootstrap";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./screens/Home";
import Header from "./components/Header";


const App = ({ signOut, user }) => {
  return (
    <div>
      <Header user={user} signOut={signOut}></Header>

      <Container className="m-3 main">
        {/* MAIN */}
        <Home></Home>
        {/* TODO: FOOTER */}
      </Container>
    </div>
  );
};

export default withAuthenticator(App);
