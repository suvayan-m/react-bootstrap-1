// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";

import CompAccordion from "./Accordion";
import CompAlert from "./Alert";
import CompButtons from "./Buttons";
// import Accordion from "react-bootstrap/Accordion";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <CompAlert />
      <CompAccordion />
      <CompButtons />
    </>
  );
}

export default App;
