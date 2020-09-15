import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/application.scss";

const App = () => {
  return (
    <div className="app-container">
      <h1>Sup World 🌎</h1>
    </div>
  );
};

const root = document.querySelector("#root");

if (root) {
  ReactDOM.render(<App />, root);
}
