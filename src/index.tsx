import React from "react";
import ReactDOM from "react-dom";
import App from "components/index";
import { Provider } from "react-redux";
import store from 'src/state';
import "./public/less/index.less";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
