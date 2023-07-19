import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

// ReactDOM.render(
//   <React.strictMode>
//     <App />
//   </React.strictMode>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
