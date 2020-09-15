import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/application.scss";


const root = document.querySelector("#root");

if (root) {
  ReactDOM.render(<App />, root);
}
