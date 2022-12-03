import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./i18n";
import "./index.scss";

ReactDOM.render(
  <Suspense fallback={null}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Suspense>,
  document.getElementById("root")
);

reportWebVitals();