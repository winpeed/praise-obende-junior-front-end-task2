import React from "react";
import "../src/styles/style.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "../src/redux/store";

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
