import React from "react";
import ReactDOM from "react-dom";
import "../src/css/styles.css";
import QuoteBox from "./app";

const QuoteMachine = () => {
  return <QuoteBox />;
};

ReactDOM.render(<QuoteMachine />, document.getElementById("root"));
